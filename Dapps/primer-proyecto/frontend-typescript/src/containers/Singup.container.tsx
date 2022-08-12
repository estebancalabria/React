import Singup from "../components/Singup";
import Registro from "../models/Registro";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//TODO:
//TODO 1 Pasar la url al archivo .env
//TODO 2 Mostrar mensaje de error si no se puede loguear
//TODO 3 Redirigir al login en caso de que sea un registro exitoso
const SINGUP_URL = "http://localhost:3001/register"; //lo tengo que pasar al archivo .env

const SingupContainer = (props:any) => {

    const navigate = useNavigate();

    return (<Singup {...props} onRegister={(reg : Registro)=>{
        axios.post(SINGUP_URL, { email : reg.usuario, password: reg.password}).then((resp)=>{
            navigate("/login");
        })
    }}/>)
 }

 export default SingupContainer;