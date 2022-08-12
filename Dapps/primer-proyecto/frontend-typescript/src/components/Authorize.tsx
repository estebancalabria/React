import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authorize = (props:any) =>{

    const estaAutenticado = localStorage.getItem("token") != null;
    const navigate = useNavigate();
 
    useEffect(()=>{
      if (!estaAutenticado){
        navigate("/login");
      }
    },[])

    if (estaAutenticado){
        return props.children;
    }
    return <></>;
}

export default Authorize;