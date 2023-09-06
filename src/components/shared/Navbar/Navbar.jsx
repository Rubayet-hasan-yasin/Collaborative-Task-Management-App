import { Link } from "react-router-dom";

const Navbar = () => {
    const user = false
    return (
        <nav className="container mx-auto flex justify-between items-center border">
            <div className="flex items-center gap-3">
                <h4 className="bg-blue-500 w-fit text-2xl px-[22px] py-3 text-white font-bold rounded-full">T</h4>
                <h3 className="text-2xl font-bold text-blue-500">Task</h3>
            </div>

            <div className="">
                {
                    user ?
                        
                        <div className="ring-2 rounded-full overflow-hidden w-10 h-10">
                            <img
                                src={"https://i.ibb.co/5L7dBkZ/18ce1.png" || 'https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png'}
                                alt="p"
                                className="w-10 object-cover"
                                referrerPolicy="no-referrer" />
                        </div>
                        :
                        <Link to={"login"} className="bg-gradient-to-r from-sky-300 to-blue-400 px-5 py-2 rounded-md text-xl font-semibold text-white hover:from-blue-400 hover:to-sky-300 hover:scale-95">Login</Link>
                }
            </div>

        </nav>
    );
};

export default Navbar;