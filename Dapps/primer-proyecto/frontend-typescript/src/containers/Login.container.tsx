import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import Rutas from "../urls/routes";

//TODO:Sacar la url al archivo.env
const LoginContainer = (props:any) =>{

    const navigate = useNavigate();
    const service : AuthService = new AuthService();
   
    return <Login {...props} onLogin={(email,password)=>{
        service.login(email,password).then((resp)=>{
            navigate(Rutas.TAREAS)
        }).catch((err)=>{
            alert("Error de Autenticacion");
        });
   }}/>
}

export default LoginContainer;