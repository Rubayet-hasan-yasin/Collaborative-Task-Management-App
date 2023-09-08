import { useContext, useState } from "react";
import NormalModal from "./Modal/NormalModal";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const AddTeamspaceModal = ({ isOpen, setIsOpen }) => {
    // const initialTeams = [
    //     { id: 1, name: 'Team A', members: ['user1'] },
    //     { id: 2, name: 'Team B', members: ['user2'] },
    //   ];
    
      const [newTeamName, setNewTeamName] = useState('');
      const {teams, setTeams} = useContext(AuthContext);

    //   console.log(teams)
    
      const handleCreateTeam = () => {
        if (newTeamName.trim() === '') {
          Swal.fire({
            position: 'top',
            icon: 'warning',
            title: 'Team name cannot be empty.',
            showConfirmButton: false,
            timer: 1500
          })
          return;
        }
    
        const newTeam = {
          id: teams.length + 1,
          name: newTeamName,
          members: [],
        };
    
        const updateTeams = [...teams, newTeam];

        setTeams(updateTeams);

        localStorage.setItem("teams", JSON.stringify(updateTeams))
        setNewTeamName('');
        setIsOpen(false)

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Team created successfully.',
            showConfirmButton: false,
            timer: 1500
        });
      };
      




    
    
    return (
        <div>
            <NormalModal isOpen={isOpen} setIsOpen={setIsOpen} >
                <div className="App text-center p-4">
                    <h1 className="text-3xl font-bold mb-4">Add Teamspace</h1>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter team name"
                            value={newTeamName}
                            onChange={(e) => setNewTeamName(e.target.value)}
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

export default AddTeamspaceModal;