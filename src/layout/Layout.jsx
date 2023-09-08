import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet />
            </div>

            <footer>

                <div className="mb-6 h-fit">

                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2023 Task Management, Inc. All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    );
};

export default Layout;