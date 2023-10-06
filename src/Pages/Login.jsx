import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import Iconlogin from "./Iconlogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";


const Login = () => {
    const {logIn}=useContext(AuthContext);

    const handleLogin=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(name,email,password);

        if(password.length<6){
            toast.error('Password must have at least 6 characters')
        }
        // if(!/[A-Z] ^[@#](?=.{7,13}$)(?=\w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*\d)/.test(password)){
        //     toast.error('Password must contain contain capital letter and special character');
        //     return;
        // }

        logIn(email,password)
        .then(result=>{
            console.log(result.user)
            toast.success('Logged in succesfully')
        })
        .catch(error=>{
            console.log(error)
        })

    }
   
    

    return (
       <div className="bg-base-200">
         <div className="hero pt-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                                <h2>
                                    Dont’t Have An Account ? <Link to='/register' className="text-red-500">Register</Link>
                                </h2>
                            </div>
                    </form>

                </div>
            </div>
        </div>
        <div className=" text-center items-center">
             <h2 className="text-2xl text-black font-sans font-semibold">Or login with,</h2>
             <Iconlogin></Iconlogin>
        </div>
       </div>
    );
};

export default Login;