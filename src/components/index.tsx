import axios from "axios";
import { useState, useEffect } from "react";
import AddButton from "./addButton/AddButton";
import Header from "./header/Header";
import InputInformation from "./inputInformation/InputInformation";
import Card from "./card/Card";

interface Props {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  groups: string;
  email: string;
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

  const topics = [
    {
      topic: "First name",
      value: "firstName",
      setValue: setFirstName,
      type: "text",
    },
    {
      topic: "Last name",
      value: "lastName",
      setValue: setLastName,
      type: "text",
    },
    {
      topic: "Phone number",
      value: "phoneNumber",
      setValue: setPhoneNumber,
      type: "number",
    },
    {
      topic: "Groups",
      value: "groups",
      setValue: setGroups,
      type: "text",
    },
    {
      topic: "Email",
      value: "email",
      setValue: setEmail,
      type: "email",
    },
  ];

  function addHandler() {
    if (!!firstName && !!lastName && !!phoneNumber && !!groups && !!email) {
      axios.post("http://localhost:5000/users", {
        id: Date.now(),
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
      const Data = await axios.get("http://localhost:5000/users");
      setUser(Data.data);
    }
    getUsers();
    setIsChanged(false);
  }, [isChanged]);

  return (
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
                  setValue={item.setValue}
                  showWarning={showWarning}
                  type={item.type}
                />
              );
            })}
          </div>
          <AddButton onClick={addHandler} />
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;
