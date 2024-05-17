interface Props {
  editHandler : ()=> void;
}
export default function RenameButton({editHandler}:Props) {
  return (
    <button onClick={editHandler} className="bg-blue-300 mt-3 rounded-l-md p-1 border-none shadow-md">
      Rename
    </button>
  );
}
