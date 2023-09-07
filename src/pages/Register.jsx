import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import {useState} from "react"




const Register = () => {
    const [imgName, setImgName] = useState('Upload Image');

    const { handleSubmit, register, reset, formState: { errors } ,setError } = useForm();

    const onSubmit = (data) => {
        
        if(data.password !== data.confirmPassword){
            return setError("confirmPassword",{
                
                message: "Passwords do not match"
            })
        }


        console.log(data)
    }



    return (
        <section className="flex flex-col md:flex-row h-fit items-center p-10">



            <div className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-2/3      xl:w-2/3 h-full px-6 lg:px-16 xl:px-12 flex items-center justify-center border rounded-md shadow-2xl p-10">

                <div className="w-full">


                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input
                                {...register("name", {required: true})}
                                type="text"
                                name="name" id=""
                                placeholder="Enter Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                        </div>
                       


                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                name="email" id=""
                                placeholder="Enter Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                {...register("password", {required: true})}
                                type="password"
                                name="password" id=""
                                placeholder="Enter Password"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input
                                {...register('confirmPassword', {required: true})}
                                type="password"
                                name="confirmPassword" id=""
                                placeholder="Confirm Password"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">
                                <input
                                    {...register('photo')}
                                    type="file"
                                    onChange={(e)=>setImgName(e.target.files[0].name)}
                                    className="sr-only"
                                    accept="image/*" required />
                                Profile Picture

                                <div className='bg-sky-400 text-white border border-gray-300 rounded font-semibold cursor-pointer w-fit p-1 px-3 hover:bg-sky-500'>
                                    {imgName}
                                </div>
                            </label>

                        </div>

                        {errors.confirmPassword && <p className="text-red-400 mt-3">{errors.confirmPassword.message}</p>}

                        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
                    </form>



                    <hr className="my-6 border-gray-300 w-full" />


                    <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <FcGoogle size={30} />
                            <span className="ml-4">
                                Log in
                                with
                                Google</span>
                        </div>
                    </button>

                    <p className="mt-8">have an account? <Link to={'/login'} className="text-blue-500 hover:text-blue-700 font-semibold">Login</Link></p>


                </div>
            </div>

            <div className=" hidden md:grid justify-center items-center w-full xl:w-1/3 ">
                <Link to={'/login'} className="text-white bg-gray-800 h-fit px-5 py-3 rounded-md hover:bg-gray-700 flex items-center gap-5">Login Now <FaArrowRight /></Link>
            </div>

        </section>
    );
};

export default Register;