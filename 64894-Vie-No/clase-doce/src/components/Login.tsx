import { useContext } from "react";
import LoginContext from "../context/LoginContext";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";


const Login = () => {

    let context = useContext(LoginContext);
    let navigate = useNavigate();

    return (<LoginForm 
        onLogin={(u,p)=>{
            //el ! es de typeScript
            if (context.logIn!(u,p)){
                navigate("/");
                return true;
            }            
            return false;
        }}
    />);
}
 
export default Login;