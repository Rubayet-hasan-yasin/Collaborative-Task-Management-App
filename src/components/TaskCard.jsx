import { BsCalendarWeek, BsArrowRightShort, BsPatchCheck } from "react-icons/bs";
import Swal from "sweetalert2";

const TaskCard = ({ item, setTasks, userName }) => {


    const statusUpdate = (str, id) => {

        const allTask = JSON.parse(localStorage.getItem("tasks"));

        const otherTask = allTask.filter(task => task.id !== id);
        let currentTask = allTask.find(task => task.id == id);

        currentTask.status = str;

        localStorage.removeItem('tasks')
        localStorage.setItem('tasks', JSON.stringify([currentTask, ...otherTask]))

        const tasks = JSON.parse(localStorage.getItem("tasks"));
        setTasks(tasks)
    }

    const handleStartTask = id => {
        statusUpdate("in progress", id)

    }

    const handleCompleteTask = id => {
        statusUpdate("complete", id)

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Task Complete! Great job! 🎉',
            showConfirmButton: false,
            timer: 1500
          })
    }


    return (
        <div className="bg-red-50 p-5 px-10 w-2/3 mx-auto relative">
            <p className="text-white bg-[#5f2bc0] w-fit px-3 py-1 rounded-2xl text-xs absolute -top-3 -right-7 border-4 border-white">
                {item.status == 'not strated' && 'Not Strated'}
                {item.status == 'in progress' && "In progress"}
                {item.status == 'complete' && "Complete"}
            </p>


            <h4 className="text-xl font-semibold">{item.title}</h4>

            <p className="text-sm text-[#747474] mt-1 mb-3">{item.description}</p>


            <p className="text-sm text-[#747474] mt-4">Assigned To- {item.assignedTo} {userName == item.assignedTo && '(Me)'}</p>


            <p className={`text-sm text-[#747474] mt-0 mb-1 ${item.priority == 'high' && 'text-[#FF0000]'} ${item.priority == 'medium' && 'text-[#FFA500]'} ${item.priority == 'low' && 'text-[#00FF00]'} `}>Priority- {item.priority} {userName == item.assignedTo && '(Me)'}</p>



            <p className="flex items-center gap-2 text-base text-[#976262]"><BsCalendarWeek size={13} /> {item.date}</p>



            <div className="w-full grid">
                {
                    item.status == "not strated" &&
                    <button onClick={() => handleStartTask(item.id)} className="bg-primary text-white text-base gap-1 px-2 pl-4 py-1 ml-auto rounded-2xl flex items-center hover:bg-blue-900">Start task <BsArrowRightShort size={24} /></button>

                }

                {
                    item.status == "in progress" &&
                    <button onClick={() => handleCompleteTask(item.id)} className="bg-primary text-white text-base gap-2 px-2 pl-4 py-1 ml-auto rounded-2xl flex items-center">Complete <BsArrowRightShort size={24} /></button>
                }

                {
                    item.status == "complete" &&
                    <p className="bg-primary text-white text-base gap-2 px-2 pl-4 py-1 ml-auto rounded-2xl flex items-center">Complete <BsPatchCheck size={24} /></p>
                }









            </div>
        </div>
    );
};

export default TaskCard;