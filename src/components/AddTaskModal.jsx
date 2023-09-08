import { useForm } from 'react-hook-form';
import NormalModal from './Modal/NormalModal';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';


const AddTaskModal = ({ isOpen, setIsOpen,setTask, task }) => {
    const {user} = useContext(AuthContext);
    const { handleSubmit, register, reset } = useForm();

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
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
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
                        <option value="Jahangir Alam">Jahangir Alam</option>
                        <option value="Hiroshi Tanaka">Hiroshi Tanaka</option>
                        <option value="Mohammad Rahman">Mohammad Rahman</option>
                        <option value="Kamal Ahmed">Kamal Ahmed</option>
                        <option value="Ahmed Khan">Ahmed Khan</option>
                        <option value="Jahangir Alam">Jahangir Alam</option>
                        <option value="Harun Mia">Harun Mia</option>
                        <option value="Arif Hussain">Arif Hussain</option>
                        <option value="Shahidul Islam">Shahidul Islam</option>
                        <option value="Nasir Uddin">Nasir Uddin</option>
                        <option value="Hasan Ali">Hasan Ali</option>
                        <option value="Aminul Haque">Aminul Haque</option>
                        <option value="Mahbub Alam">Mahbub Alam</option>
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