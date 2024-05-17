import axios from "axios";
import { useState, useEffect } from "react";
import AddButton from "./addButton/AddButton";
import Header from "./header/Header";
import InputInformation from "./inputInformation/InputInformation";
import Card from "./card/Card";
import { BASE_URL } from "../constants/constants";
import Swal from "sweetalert2";

interface Props {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  groups: string;
  email: string;
  deleteHandler: (id: string) => void;
}


function LayoutPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [groups, setGroups] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<Props[]>([]);
  const [isChanged, setIsChanged] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [textButton, setTextButton] = useState("Add");
  const [resData, setResData] = useState({});

  const topics = [
    {
      topic: "First name",
      value: firstName,
      setValue: setFirstName,
      type: "text",
    },
    {
      topic: "Last name",
      value: lastName,
      setValue: setLastName,
      type: "text",
    },
    {
      topic: "Phone number",
      value: phoneNumber,
      setValue: setPhoneNumber,
      type: "number",
    },
    {
      topic: "Groups",
      value: groups,
      setValue: setGroups,
      type: "text",
    },
    {
      topic: "Email",
      value: email,
      setValue: setEmail,
      type: "email",
    },
  ];

  function addHandler() {
    if (
      !!firstName &&
      !!lastName &&
      !!phoneNumber &&
      !!groups &&
      !!email &&
      Object.keys(resData).length === 0
    ) {
      axios.post(`${BASE_URL}users`, {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        groups: groups,
        email: email,
      });
      setIsChanged(true);
    } else if (
      !!firstName &&
      !!lastName &&
      !!phoneNumber &&
      !!groups &&
      !!email &&
      Object.keys(resData).length !== 0
    ) {
      
      axios.patch(`${BASE_URL}users/${resData.id}`, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        groups: groups,
        email: email,
      });
      setIsChanged(true);
    } else {
      setShowWarning(true);
    }
  }

  useEffect(() => {
    async function getUsers() {
      const Data = await axios.get(`${BASE_URL}users`);
      setUser(Data.data);
    }
    getUsers();
    setIsChanged(false);
  }, [isChanged]);

  // the modal in deleteHandler is made by sweetalert package !
  async function deleteHandler(id: number) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await axios.delete(`${BASE_URL}users/${id}`);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      setIsChanged(true);
    }
  }

  async function editHandler(id: number) {
    const res = await axios.get(`${BASE_URL}users/${id}`);
    setFirstName(res.data.firstName);
    setLastName(res.data.lastName);
    setPhoneNumber(res.data.phoneNumber);
    setGroups(res.data.groups);
    setEmail(res.data.email);
    setResData(res.data);
    
    setTextButton("Save Changes");
  }


  return (
    <div>
      <div>
        <Header />
        <div className="grid grid-cols-2 font-mono font-bold">
          <h3 className="font-bold mb-2 text-center">Add/Rename User</h3>
          <h3 className="font-bold mb-2 text-center">List of Users</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-purple-200 rounded-lg shadow-md p-3">
            <div>
              {topics.map((item) => {
                return (
                  <InputInformation
                    topic={item.topic}
                    inputValue={item.value}
                    setValue={item.setValue}
                    showWarning={showWarning}
                    type={item.type}
                    key={item.topic}
                  />
                );
              })}
            </div>
            <AddButton textButton={textButton} onClick={addHandler} />
          </div>
          <div className="bg-pink-200 grid gap-2 rounded-lg p-3 h-[450px] overflow-auto shadow-md lg:grid-cols-2">
            {user.map((item) => {
              return (
                <Card
                  firstName={item.firstName}
                  lastName={item.lastName}
                  email={item.email}
                  groups={item.groups}
                  phoneNumber={item.phoneNumber}
                  deleteHandler={() => deleteHandler(item.id)}
                  editHandler={() => editHandler(item.id)}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;
