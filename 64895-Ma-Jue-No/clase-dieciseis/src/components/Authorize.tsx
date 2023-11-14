import {useContext, useEffect} from "react";
import LoginContext from "../context/LoginContext";
import {useNavigate} from "react-router-dom";

type AuthorizeProps = {
    children : any;
}

const Authorize = (props : AuthorizeProps) => {

    const context = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if (!context.isLoggedIn) {
            navigate("/login");
        }
    },[]);


    return (context.isLoggedIn && props.children);
}
 
export default Authorize;