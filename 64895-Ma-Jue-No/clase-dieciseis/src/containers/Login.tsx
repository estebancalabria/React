import {useContext, useState} from "react";
import LoginContext from "../context/LoginContext";
import LoginForm from "../components/LoginForm";

const Login = () => {

    const context = useContext(LoginContext);

    return (<LoginForm onLogin={(usuario, password)=>{
        context.logIn(usuario, password)
    }} />);
}
 
export default Login;