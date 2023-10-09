import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import Iconlogin from "./Iconlogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";


const Register = () => {

    const {createUser ,handleProfileUpdate}=useContext(AuthContext);
    const navigate=useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const img=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(name,email,password);

        if(password.length<6){
            toast.error('Password must have at least 6 characters');
            return;
        }
        // if (!/[A-Z]/.test(password) ||
        // !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        //     toast.error('Password must contain at least one capital letter and one special character');
        //     return;
        // }

        createUser(email, password)
        .then((userResult) => {
            console.log(userResult.user);
            return handleProfileUpdate(name, img);
        })
        .then(() => {
            toast.success('User created successfully');
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });

    }
    return (
        <div className="bg-base-200">
            <div className="hero pt-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="URL" className="input input-bordered" name="photo" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <h2>
                                    Already have an account?<Link to='/login' className="text-red-500">Login</Link>
                                </h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className=" text-center items-center">
                <h2 className="text-2xl text-black font-sans font-semibold">Or Signup with,</h2>
                <Iconlogin></Iconlogin>
            </div>
        </div>
    );
};

export default Register;