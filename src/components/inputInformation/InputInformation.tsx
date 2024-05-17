interface Props {
  topic: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  showWarning: boolean;
  type: string;
  inputValue: string;
}

function InputInformation({
  topic,
  setValue,
  showWarning,
  type,
  inputValue,
}: Props) {
  return (
    <div>
      <p className="font-semibold">{topic}:</p>
      <input
        type={type}
        value={inputValue}
        className="border w-full shadow-lg my-1 p-1 outline-none"
        placeholder={`${topic} ...`}
        onChange={(e) => setValue(e.target.value)}
      />
      {showWarning && inputValue === "" && (
        <p className="text-red-500">please enter the {topic}</p>
      )}
    </div>
  );
}

export default InputInformation;
