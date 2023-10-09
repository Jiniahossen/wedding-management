import { FcGoogle } from 'react-icons/fc';
import {BsGithub} from 'react-icons/bs'
import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Iconlogin = () => {
    const {googleSignin,githubSignIn} =useContext(AuthContext);
    const navigate=useNavigate()


    const handleDirectSignin=(media)=>{
 

        media()
        .then(res=>{
            console.log(res.user);
            toast.success('Logged in succesfully');
            navigate('/')
        })
        .catch(err=>{
            console.log(err)
            toast.error(err)
        })
    }
    return (
        <div>
            <div className=' text-2xl text-center pt-4 pb-6'>
                <button className='pe-4' onClick={()=>handleDirectSignin(googleSignin)}><FcGoogle></FcGoogle></button>
                <button onClick={()=>handleDirectSignin(githubSignIn)}><BsGithub></BsGithub></button>

             </div>
            
        </div>
    );
};

export default Iconlogin;