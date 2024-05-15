
function AddButton({onClick}:{onClick:()=>void}) {
  return (
    <button onClick={onClick} className="bg-green-500 text-white py-1 border-none px-2 rounded-md ml-4 my-4 shadow-md">
      Add
    </button>
  );
}

export default AddButton;
