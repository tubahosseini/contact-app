import DeleteButton from "./DeleteButton";
import RenameButton from "./RenameButton";

function Card() {
  return (
    <div className="bg-white p-5 flex justify-between flex-col rounded-lg shadow-lg">
      <div className="">
        <div className="flex gap-1">
          <p className="font-semibold">Name: </p>
          <span>ali mohammadi</span>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Phone: </p>
          <span>09130554311</span>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Groups: </p>
          <span>friends</span>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Email: </p>
          <span>alimohammadi@gmail.com</span>
        </div>
      </div>
      <div className="ml-auto">
        <RenameButton />
        <DeleteButton />
      </div>
    </div>
  );
}

export default Card;
