import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { BsPlus, BsTrash3Fill, BsArrowRightShort } from "react-icons/bs";
import AddTeamspaceModal from "../components/AddTeamspaceModal";


const TeamCollaboration = () => {
    const { teams, user, setTeams } = useContext(AuthContext);
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


    const handleTeamDelete = id =>{
        const updateTeam = teams.filter(team=> team.id !== id);

        localStorage.setItem("teams", JSON.stringify(updateTeam));
        setTeams(updateTeam)
    }

    // console.log(teams);


    return (
        <div className="container mx-auto">
            

            <h3 className="text-4xl font-bold text-gray-600 text-center">Teamspace Home</h3>

            <p onClick={handleTeamModalOpen} className="flex items-center gap-2 group/add hover:text-red-700 mt-2 w-fit cursor-pointer">
                <BsPlus className="text-2xl group-hover/add:bg-red-700 rounded-full group-hover/add:text-white" />
                Add Teamspace
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {
                    teams.map(team => <div
                        className="bg-red-50 px-10 py-5 shadow-xl"
                        key={team.id}
                    >
                        <p className="">Team Name: {team.name}</p>
                        <p>Member: {team.members.length}</p>

                        <div className="flex justify-between mt-4">
                            <Link to={`/team/${team.id}`} className="bg-primary text-white px-3 pl-5 py-1 rounded flex items-center hover:bg-[#3c44b3]">View <BsArrowRightShort size={25}/></Link>

                            {/* Delete teams  */}
                            <button onClick={()=>handleTeamDelete(team.id)} className="bg-red-200 p-3 rounded-full shadow-2xl hover:bg-red-300"><BsTrash3Fill /></button>
                        </div>

                    </div>)
                }
            </div>

            <AddTeamspaceModal setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    );
};

export default TeamCollaboration;