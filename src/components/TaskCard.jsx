import { BsCalendarWeek, BsArrowRightShort, BsPatchCheck} from "react-icons/bs";

const TaskCard = ({ item }) => {
    return (
        <div className="bg-red-50 p-5 px-10 w-2/3 mx-auto relative">
            <p className="text-white bg-[#5f2bc0] w-fit px-3 py-1 rounded-2xl text-xs absolute -top-3 -right-7 border-4 border-white">{item.status == 'not strated' ? 'Not Strated' : "In progress"}</p>


            <h4 className="text-xl font-semibold">{item.title}</h4>

            <p className="text-sm text-[#747474] mt-1 mb-3">{item.description}</p>


            <p className="flex items-center gap-2 text-base text-[#976262]"><BsCalendarWeek size={13} /> {item.date}</p>



            <div className="w-full grid">
                {/* in progress  */}
                <button className="bg-primary text-white text-base gap-1 px-2 pl-4 py-1 ml-auto rounded-2xl flex items-center hover:bg-blue-900">Start task <BsArrowRightShort size={24} /></button>

                {/* Complete  */}
                <button className="bg-primary text-white text-base gap-2 px-2 pl-4 py-1 ml-auto rounded-2xl flex items-center hidden">Complete <BsPatchCheck size={24} /></button>


            </div>
        </div>
    );
};

export default TaskCard;