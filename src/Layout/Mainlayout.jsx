import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';



const Mainlayout = () => {
    return (
        <div>
             <Toaster />
            <Navbar></Navbar>
            <Outlet></Outlet>
             
        </div>
    );
};

export default Mainlayout;