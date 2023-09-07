import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useForm } from 'react-hook-form';



const Login = () => {
    const { logWithEmailAndPassword } = useContext(AuthContext);

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit =data=>{
        const email = data.email;
        const password = data.password;

        logWithEmailAndPassword(email, password)
        .then((r)=>{
            console.log(r.user)

        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        // < !--component -- >
        <section className="flex flex-col md:flex-row h-screen items-center">

            <div className="bg-indigo-600 hidden md:flex justify-center items-center w-full md:w-1/2 xl:w-2/3 h-screen">
                <Link to={'/Register'} className="text-white bg-gray-800 h-fit px-5 py-3 rounded-md hover:bg-gray-700 flex items-center gap-5">Register Now <FaArrowRight /></Link>
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2      xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                <div className="w-full">


                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label className="block text-gray-700">Email Address</label>

                            <input
                                type="email"
                                {...register("email", {required: true})}
                                name="email" id=""
                                placeholder="Enter Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>

                            <input 
                            type="password" 
                            {...register('password', {required: true, minLength: 6})}
                            name="password" id="" 
                            placeholder="Enter Password"
                            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
                             />
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div>

                        {errors.password && <p className="text-red-400 mt-3">Password should be at least 6 characters</p>}

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

                    <p className="mt-8">Need an account? <Link to={'/register'} className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                        account</Link></p>


                </div>
            </div>

        </section>
    );
};

export default Login;