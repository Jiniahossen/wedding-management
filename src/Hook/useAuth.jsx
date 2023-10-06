import { createContext, useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";


const useAuth = () => {

    const all=createContext(Authcontext)
    return all;
};

export default useAuth;