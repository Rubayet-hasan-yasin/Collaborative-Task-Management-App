import { useContext, useState } from "react";
import NormalModal from "./Modal/NormalModal";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";

const AddteamMemberModal = ({ isOpen, setIsOpen, id }) => {
    const [memberName, setMemberName] = useState('');
    const { teams, setTeams } = useContext(AuthContext);



    // console.log(teams);


    const handleCreateTeam = () => {
        if (memberName.trim() === '') {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Team name cannot be empty.',
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }

        let team = teams.find(team => team.id === parseInt(id));
        
        const newTeamMember = {
            id: Math.floor(Math.random() * 9000) + 1000,
            name: memberName
        };
        
        // // const updateMember = [...teams.members, newTeamMember];
        
        team.members.push(newTeamMember);
        
        const othersTeams = teams.filter(team => team.id !== parseInt(id));
        
        
        // console.log([...othersTeams, team])

        setTeams([...othersTeams, team]);

        localStorage.setItem("teams", JSON.stringify([...othersTeams, team]))

        setMemberName('');
        setIsOpen(false)

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Team Member added successfully.',
            showConfirmButton: false,
            timer: 1500
        });
    };


    return (
        <div>
            <NormalModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="App text-center p-4">
                    <h1 className="text-3xl font-bold mb-4">Add Teamspace</h1>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter Member name"
                            value={memberName}
                            onChange={(e) => setMemberName(e.target.value)}
                            className="border rounded-md px-2 py-1 mr-2"
                        />
                        <button onClick={handleCreateTeam} className="bg-blue-500 text-white px-3 py-1 rounded-md">
                            Create Team
                        </button>
                    </div>
                </div>
            </NormalModal>
        </div>
    );
};

export default AddteamMemberModal;