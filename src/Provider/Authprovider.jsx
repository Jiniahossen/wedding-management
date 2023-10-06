import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";


export const Authcontext= createContext();
const googleProvider = new GoogleAuthProvider();

const Authprovider = () => {

    // google sign in 
    


    const authContextInfo={

    }
    return (
        <Authcontext.Provider value={authContextInfo}>
            
        </Authcontext.Provider>
    );
};

export default Authprovider;