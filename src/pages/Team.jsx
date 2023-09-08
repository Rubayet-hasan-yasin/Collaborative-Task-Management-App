import { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { useParams } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import AddteamMemberModal from '../components/AddteamMemberModal';
import TaskCard from '../components/TaskCard';

const Team = () => {
    const { teams } = useContext(AuthContext);
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const team = teams.find(team => team.id === parseInt(id));




    return (
        <div className='container mx-auto'>
            <div className="flex mb-5 -space-x-4 justify-center">
                <img className={`w-10 h-10 border-2 border-white rounded-full ${team?.members.length >= 1 ? "block" : "hidden"}`} src="https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png" alt="" />

                <img className={`w-10 h-10 border-2 border-white rounded-full ${team?.members.length > 1 ? "block" : "hidden"}`} src="https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png" alt="" />

                <img className={`w-10 h-10 border-2 border-white rounded-full ${team?.members.length > 2 ? "block" : "hidden"}`} src="https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png" alt="" />

                {
                    team?.members.length > 3 &&
                    <p className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600">+{team?.members.length - 3}</p>
                }
            </div>

            <div>
                <p onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 group/add hover:text-red-700 mt-2 w-fit cursor-pointer">
                    <BsPlus className="text-2xl group-hover/add:bg-red-700 rounded-full group-hover/add:text-white" />
                    Add Team Member
                </p>
            </div>


            {/* task section  */}
            <div>
                {/* <TaskCard>

                </TaskCard> */}

            </div>

            <AddteamMemberModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
        </div>
    );
};

export default Team;