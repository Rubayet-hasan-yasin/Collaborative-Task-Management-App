import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import AddTaskModal from "../components/AddTaskModal";
import TaskCard from "../components/TaskCard";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  // console.log("task", tasks);


  useEffect(() => {
    const notExist = tasks.filter(item=> item.id !== tasks.id) || [];

    if(task.id){
      localStorage.setItem("tasks", JSON.stringify([task,...notExist]))
      setTask([])
    }
     const tasksFromLocalStor = JSON.parse(localStorage.getItem('tasks'))

    setTasks(tasksFromLocalStor || [])

  }, [task])

  console.log("tasks", tasks);


  return (
    <div className="container mx-auto mt-10">
      <hr />

      <p onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 group/add hover:text-red-700 mt-2 w-fit cursor-pointer">
        <BsPlus className="text-2xl group-hover/add:bg-red-700 rounded-full group-hover/add:text-white" />
        Add task
      </p>

      {/* tasks display  */}
      <div className="mt-7 space-y-8">
        {tasks.length > 0 &&
          tasks.map((item) => <TaskCard key={item.id} item={item}/>)
        
        }
      </div>


      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} setTask={setTask} task={task} />
    </div>
  );
};

export default Home;