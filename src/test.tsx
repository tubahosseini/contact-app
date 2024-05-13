// import { useState } from "react";

// const inputTitle = [
//   "First name",
//   "Last name",
//   "Phone number",
//   "Groups",
//   "Email",
// ];
// const valueTitle = ["firstName", "lastName", "phoneNumber", "groups", "email"];
// const valueTitleSet = ["setFirstName", "setLastName", "setPhoneNumber", "setGroups", "setEmail"];

// function InputInformation() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [groups, setGroups] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <div>
//       {inputTitle.map((item) => (
//         <div className="p-4" key={item}>
//           <p>{item}:</p>
//           <input
//             type="text"
//             placeholder={item}
//             value={valueTitle.map((item) => `${item}`)}
//             className="border w-full shadow-lg my-1 p-1"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default InputInformation;



// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [phoneNumber, setPhoneNumber] = useState("");
// const [groups, setGroups] = useState("");
// const [email, setEmail] = useState("");
// const [inputValue, setInputValue] = useState("");

// const titles = [
//     { title: "First name", value: "firstName" , setValue :setFirstName},
//     { title: "Last name", value: "lastName" , setValue :setLastName},
//     { title: "Phone number", value: "phoneNumber" , setValue :setPhoneNumber},
//     { title: "Groups", value: "groups", setValue :setGroups},
//     { title: "Email", value: "email" , setValue :setEmail},
//   ];