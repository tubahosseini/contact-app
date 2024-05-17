import DeleteButton from "./DeleteButton";
import RenameButton from "./RenameButton";

interface Props {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  groups: string;
  email: string;
  deleteHandler: () => void;
  editHandler: () => void;
}

function Card({
  firstName,
  lastName,
  phoneNumber,
  groups,
  email,
  deleteHandler,
  editHandler,
}: Props) {

  return (
    <div className="bg-white p-5 flex justify-between flex-col rounded-lg shadow-lg h-[200px]">
      <div>
        <div className="flex gap-1">
          <p className="font-semibold">Name: </p>
          <span>{firstName + " " + lastName}</span>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Phone: </p>
          <span>{phoneNumber}</span>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Groups: </p>
          <span>{groups}</span>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Email: </p>
          <span>{email}</span>
        </div>
      </div>
      <div className="ml-auto">
        <RenameButton editHandler={editHandler} />
        <DeleteButton deleteHandler={deleteHandler} />
      </div>
    </div>
  );
}

export default Card;
