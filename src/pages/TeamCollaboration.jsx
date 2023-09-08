import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import AddTeamspaceModal from "../components/AddTeamspaceModal";


const TeamCollaboration = () => {
    const { teams, user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()


    const handleTeamModalOpen = () => {
        if (user) {
            setIsOpen(!isOpen)
        }
        else {
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

    console.log(teams);


    return (
        <div className="container mx-auto">
            {/* <div className="flex mb-5 -space-x-4 justify-center">
                <img className={`w-10 h-10 border-2 border-white rounded-full ${teams.length >= 1 ? "block" : "hidden"}`} src="https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png" alt="" />

                <img className={`w-10 h-10 border-2 border-white rounded-full ${teams.length > 1 ? "block" : "hidden"}`} src="https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png" alt="" />

                <img className={`w-10 h-10 border-2 border-white rounded-full ${teams.length > 2 ? "block" : "hidden"}`} src="https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png" alt="" />

                {
                    teams.length > 3 &&
                    <p className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600">+{teams.length - 3}</p>
                }
            </div> */}

            <h3 className="text-4xl font-bold text-gray-600 text-center">Teamspace Home</h3>

            <p onClick={handleTeamModalOpen} className="flex items-center gap-2 group/add hover:text-red-700 mt-2 w-fit cursor-pointer">
                <BsPlus className="text-2xl group-hover/add:bg-red-700 rounded-full group-hover/add:text-white" />
                Add Teamspace
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {
                    teams.map(team => <div
                    className="bg-red-200"
                    key={team.id}
                    >
                        <p className="">Team Name: {team.name}</p>
                        <p>Member: {team.members.length}</p>

                    </div>)
                }
            </div>

            <AddTeamspaceModal setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    );
};

export default TeamCollaboration;