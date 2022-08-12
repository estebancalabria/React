import Login from "../components/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//TODO:Sacar la url al archivo.env

const LOGIN_URL = "http://localhost:3001/login";


const LoginContainer = (props:any) =>{

    const navigate = useNavigate();
   
    return <Login {...props} onLogin={(email,password)=>{
        axios.post(LOGIN_URL, {email, password}).then((resp)=>{
           
            const jwt = resp.data.accessToken;
            localStorage.setItem("token", jwt);
           
            navigate("/tareas");
        }).catch(()=>{
            alert("Error de Autenticacion");
        });
   }}/>
}

export default LoginContainer;