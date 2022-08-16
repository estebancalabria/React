import Singup from "../components/Singup";
import Registro from "../models/Registro";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import Routes from "../urls/routes";

//TODO:
//TODO 2 Mostrar mensaje de error si no se puede loguear

const SingupContainer = (props:any) => {

    const navigate = useNavigate();
    const service : AuthService = new AuthService();

    return (<Singup {...props} 
        onRegister={(reg : Registro)=>{
            service.register(reg).then(()=>{
                navigate(Routes.LOGIN);
            })
    }}/>)
 }

 export default SingupContainer;