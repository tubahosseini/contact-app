import AddButton from "./addButton/AddButton";
import Card from "./card/Card";
import InputInformation from "./inputInformation/InputInformation";

function LayoutPage() {
  return (
    <div>
      <h1 className="bg-yellow-200 text-center p-3 rounded-b-[40px] mb-5 font-bold text-lg">
        Contacts Web Application
      </h1>
      <div className="grid grid-cols-2 font-mono font-bold">
        <h3 className="font-bold mb-2 text-center">Add/Rename User</h3>
        <h3 className="font-bold mb-2 text-center">List of Users</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-purple-200 p-1 rounded-lg shadow-md">
          <InputInformation />
          <AddButton />
        </div>
        <div className="bg-pink-200 grid gap-2 rounded-lg p-3 h-[450px] overflow-auto shadow-md lg:grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;
