import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import userpic from '../assets/user.png';
import toast from "react-hot-toast";
import '../index.css'

const Navbar = () => {

    const navLinks = <>
        <Link to='/'> <li>Home</li></Link>
        <Link to='/Venue'> <li>Venue</li></Link>
        <Link to='/about'> <li>About</li></Link>
    </>

    const { user, signout } = useContext(AuthContext);

    const handleSignOutButton = () => {
        signout()
            .then(
                toast.success('Logged out successfully')
            )
            .catch(error=>{
                toast.error(error)
            })
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <div>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLinks}
                                </ul>
                            </div>
                            <h2 className="text-xl text-black font-sans font-medium items-center text-center flex-row justify-center mb-4 lg:mb-0"><span className="text-4xl">.</span><span className="text-2xl font-sans font-semibold text-red-800">Weddings</span></h2>
                        </div>
                        <div id='large-device-menu' className="navbar-center lg:flex ">

                            <ul className="flex gap-6 text-lg font-serif font-medium">
                                <Link to='/'> <li>Home</li></Link>
                                <Link to='/Venue'> <li>Venue</li></Link>
                                <Link to='/about'> <li>About</li></Link>
                            </ul>

                        </div>
                        {
                            user ?
                                <div className="navbar-end flex gap-2">
                                    <h2>{user.displayName}</h2>
                                    <img src={user.photoURL} className="w-8 rounded-full" alt='' />
                                    <button className="bg-[#403F3F] text-white text-base font-poppins font-medium px-3 py-1" onClick={handleSignOutButton}>Logout</button>
                                </div>
                                :
                                <div className="navbar-end flex gap-2">
                                    <img src={userpic} className="w-8" alt="" />
                                    <Link className="bg-[#403F3F] text-white text-base font-poppins font-medium px-3 py-1" to='/login'> <button>Login</button></Link>
                                </div>

                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;