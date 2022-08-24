import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import Rutas from "../urls/routes";
import { useContext } from "react";
import SessionContext from "../context/SessionContext";
import Swal from "sweetalert2";

//TODO:Sacar la url al archivo.env
const LoginContainer = (props:any) =>{
    const context = useContext(SessionContext);
    const navigate = useNavigate();
    const service : AuthService = new AuthService();
   
    return <Login {...props} onLogin={(email,password)=>{
        service.login(email,password).then((resp)=>{
            navigate(Rutas.TAREAS)
            context.setUser(email);
        }).catch((err)=>{
            Swal.fire("Error", "Verifique las credenciales", "error");
        });
   }}/>
}

export default LoginContainer;