import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Footer from "../Components/Footer";



const Mainlayout = () => {
    return (
        <div>
             <Toaster />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
             
        </div>
    );
};

export default Mainlayout;