import {useContext} from "react";
import {useNavigate} from "react-router-dom"
import LoginContext from "../context/LoginContext";
import LoginForm from "../components/LoginForm";


const Login = () => {

    const context = useContext(LoginContext);
    const navigate = useNavigate();

    return (<LoginForm onLogin={(usuario, password)=>{
         if (context.logIn(usuario, password)){
            navigate("/")
            return true;
         }
         return false;
    }} />);
}
 
export default Login;