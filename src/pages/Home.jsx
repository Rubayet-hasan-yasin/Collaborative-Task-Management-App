import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import AddTaskModal from "../components/AddTaskModal";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);


  return (
    <div className="container mx-auto mt-10">
      <hr />

      <p onClick={()=>setIsOpen(!isOpen)} className="flex items-center gap-2 group/add hover:text-red-700 mt-2 w-fit cursor-pointer">
        <BsPlus className="text-2xl group-hover/add:bg-red-700 rounded-full group-hover/add:text-white" />
        Add task
      </p>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default Home;