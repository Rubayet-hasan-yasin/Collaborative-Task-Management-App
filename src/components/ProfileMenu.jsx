import { useContext } from "react";
import Modal from "./Modal/Modal";
import { AuthContext } from "../Auth/AuthProvider";
import { FiLogOut, FiArrowRight } from "react-icons/fi";
import Bio from "./Bio";
import { Link } from "react-router-dom";

const ProfileMenu = ({ isOpen, setIsOpen }) => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setIsOpen(false)
            })
            .catch(err => {
                console.log(err);
            })
    }




    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <div className="">
                <div className="flex gap-3 mb-4">
                    <figure className="rounded-full overflow-hidden">
                        <img src={user.photoURL} width={50} alt="" />
                    </figure>

                    <div className="text-left">
                        <h3 className="text-lg font-bold">{user.displayName}</h3>
                        <p className="text-sm text-[#9F9F9F]">{user.email}</p>
                    </div>
                </div>

                <Bio />

                <hr className="mt-3" />

                <Link to='/Teamspace' onClick={() => setIsOpen(false)} className="flex gap-3 outline-none items-center py-1 hover:bg-[#e0e0e0] w-full"><FiArrowRight />Teamspace</Link>
                <hr />



                <button onClick={handleLogOut} className="flex gap-3 outline-none items-center py-1 hover:bg-[#e0e0e0] w-full"><FiLogOut />Log out</button>
                <hr />
            </div>
        </Modal>
    );
};

export default ProfileMenu;