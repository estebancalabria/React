import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";

const Anonymous = (props:any) =>{

    const service : AuthService = new AuthService();
    const navigate = useNavigate();
    useEffect(()=>{
       navigate(".") //HACK
    },[]);
    
    if (service.isAuthorized()){
        return <></>
    }

    return props.children;
}

export default Anonymous;