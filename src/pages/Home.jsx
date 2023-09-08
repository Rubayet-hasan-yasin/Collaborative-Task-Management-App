import { useState, useEffect, useContext } from "react";
import { BsPlus } from "react-icons/bs";
import AddTaskModal from "../components/AddTaskModal";
import TaskCard from "../components/TaskCard";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()

  // console.log("task", tasks);

  //validate user if user true then user can add a task
  const handleTaskModalOpen = ()=>{
    if(user){
      setIsOpen(!isOpen)
    }
    else{
      Swal.fire({
        title: 'User not found.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
  }


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

      <p onClick={handleTaskModalOpen} className="flex items-center gap-2 group/add hover:text-red-700 mt-2 w-fit cursor-pointer">
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