import { useEffect, useState } from "react";
import { PiPencilDuotone } from "react-icons/pi";


const Bio = () => {
    const [bio, setBio] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleBioSubmit=e=>{
        e.preventDefault()
        const inputBio = e.target.bio.value;

        setBio(inputBio)
    }


    useEffect(()=>{
        const fromLocal = localStorage.getItem("bio")

        if(fromLocal){
            setBio(fromLocal);
        }else{
            localStorage.setItem("bio", bio)
        }

        console.log(fromLocal)
    },[bio])


    return (
        <div className="">
            {
                bio ? <p>{bio}</p> : <PiPencilDuotone onClick={() => setToggle(!toggle)} className="mx-auto cursor-pointer hover:text-slate-400" />
            }
            {
                (toggle && !bio) && 
            <form onSubmit={handleBioSubmit} className="w-full border">
                <input 
                type="text" 
                name="bio" 
                id=""
                className="w-4/5 outline-none"
                placeholder="Add bio"
                 />
                <button type="submit" className="w-1/5 bg-sky-400">Add</button>
            </form>
            }
        </div>
    );
};

export default Bio;