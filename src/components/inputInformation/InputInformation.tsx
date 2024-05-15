import { useState } from "react";

interface Props {
  topic: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  showWarning: boolean;
  type: string;
}

function InputInformation({ topic, setValue, showWarning, type }: Props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <p className="font-semibold">{topic}:</p>
      <input
        type={type}
        className="border w-full shadow-lg my-1 p-1 outline-none"
        placeholder={`${topic} ...`}
        onChange={(e) => {
          setInputValue(e.target.value);
          setValue(e.target.value);
        }}
      />
      {showWarning && inputValue === "" && (
        <p className="text-red-500">please enter the {topic}</p>
      )}
    </div>
  );
}

export default InputInformation;
