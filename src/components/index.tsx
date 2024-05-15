import axios from "axios";
import { useState, useEffect } from "react";
import AddButton from "./addButton/AddButton";
import Card from "./card/Card";
import Header from "./header/Header";

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
  const [groups, setGroups] = useState("friend");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<Props[]>([]);
  const [isChanged, setIsChanged] = useState(true);

  function addHandler() {
    axios.post("http://localhost:5000/users", {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      groups: groups,
      email: email,
    });
    setIsChanged(true);
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
            <div className="my-2">
              <p className="font-semibold">first name:</p>
              <input
                type="text"
                className="border w-full shadow-lg my-1 p-1 outline-none"
                placeholder="first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="my-2">
              <p className="font-semibold">last name:</p>
              <input
                type="text"
                className="border w-full shadow-lg my-1 p-1 outline-none"
                placeholder="last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="my-1">
              <p className="font-semibold">phone:</p>
              <input
                type="number"
                className="border w-full shadow-lg my-1 p-1 outline-none"
                placeholder="phone"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="my-2">
              <p className="font-semibold">group:</p>
              <select
                className="border w-full shadow-lg my-1 p-1 outline-none"
                onChange={(e) => setGroups(e.target.value)}
              >
                <option value="friend">friend</option>
                <option value="family">family</option>
                <option value="colleague">colleague</option>
              </select>
            </div>
            <div className="my-2">
              <p className="font-semibold">email:</p>
              <input
                type="text"
                className="border w-full shadow-lg my-1 p-1 outline-none"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <AddButton addHandler={addHandler} />
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
