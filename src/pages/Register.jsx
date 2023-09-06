import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";




const Register = () => {
    return (
        <section className="flex flex-col md:flex-row h-fit items-center p-10">



            <div className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-2/3      xl:w-2/3 h-full px-6 lg:px-16 xl:px-12 flex items-center justify-center border rounded-md shadow-2xl p-10">

                <div className="w-full">


                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                    <form className="mt-6">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input type="text" name="" id="" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                        </div>


                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" name="" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input type="password" name="" id="" placeholder="Confirm Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">
                                <input type="file" className="sr-only" accept="image/*"/>
                                Profile Picture
                                <div className='bg-sky-400 text-white border border-gray-300 rounded font-semibold cursor-pointer w-fit p-1 px-3 hover:bg-sky-500'>
                                    Upload Image
                                </div>
                            </label>

                        </div>



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