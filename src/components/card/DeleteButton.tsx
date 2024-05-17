
export default function DeleteButton({deleteHandler}:{deleteHandler:()=>void}) {
  return (
    <button onClick={deleteHandler} className="bg-orange-300 mt-3 rounded-r-md p-1 border-none shadow-md">
      Delete
    </button>
  );
}
