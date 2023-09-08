import { useForm } from 'react-hook-form';
import NormalModal from './Modal/NormalModal';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';


const AddTaskModal = ({ isOpen, setIsOpen,setTask }) => {
    const {user} = useContext(AuthContext);
    const { handleSubmit, register, reset } = useForm();
    const [members, setMembers] = useState([]);

    // console.log(members);
    

    const onSubmit = (data) => {
        console.log(data)
        data.id = Math.floor(Math.random() * 900) + 100;
        data.status = "not strated"
        setTask(data)
        onCancel()
    }

    const onCancel = ()=>{
        reset();
        setIsOpen(false);
    }


    useEffect(()=>{
        let allMembers = []
        const teams = JSON.parse(localStorage.getItem('teams'));

        if(teams){
            teams?.map(team=>{
                team?.members.map(member=> {
    
                    allMembers.push(member)
                })
            })
        }

        setMembers(allMembers)
    },[])

    return (
        <NormalModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-3 flex-col'>
                    <label htmlFor="title" className='mb-2'>Title</label>
                    <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        type="text"
                        id='title'
                        {...register('title',{required: true})}

                    />

                </div>

                <div className='flex flex-col mb-5'>
                    <label htmlFor="title" className='mb-2'>Description</label>
                    <textarea 
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none resize-none"
                    type="text"
                    id='description'
                    {...register('description',{required: true})}
                    ></textarea>

                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="title" className='mb-2'>Deadline</label>
                    < input
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none disabledPa"
                    type="date"
                    id='date'
                    {...register('date',{required: true})}
                    />

                </div>

                <div className='flex flex-col mb-5'>
                    <label htmlFor="title" className='mb-2'>Assign to</label>
                    <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    {...register('assignedTo',{required: true})}
                    >
                        <option value={user?.displayName}>Me</option>
                        
                        {
                            members.map(member=> <option key={member.id} value={member.name}>
                                {member.name}
                            </option>)
                        }
                        
                    </select>

                </div>

                

                <div className='flex flex-col mb-5'>
                    <label htmlFor="title" className='mb-2'>Priority</label>
                    
                    <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                     id="priority"
                     {...register('priority',{required: true})}
                     >
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                     </select>

                </div>


                <div className='flex gap-3 justify-end'>
                <button
                onClick={onCancel}
                type='button' 
                className='rounded-xl h-10 px-4 grid place-content-center font-semibold  transition-all text-white bg-primary'
                >Cancel</button>

                <button type='submit' className='rounded-xl h-10 px-4 grid place-content-center font-semibold  transition-all bg-red-500 text-white'>Submit</button>
                </div>

            </form>


        </NormalModal>

    );
};

export default AddTaskModal;