import { useState } from "react";

const inputTitle = [
  "First name",
  "Last name",
  "Phone number",
  "Groups",
  "Email",
];

function InputInformation() {
  return (
    <div>
      {inputTitle.map((item) => (
        <div className="p-4" key={item}>
          <p>{item}:</p>
          <input
            type="text"
            placeholder={item}
            className="border w-full shadow-lg my-1 p-1"
          />
        </div>
      ))}
    </div>
  );
}

export default InputInformation;
