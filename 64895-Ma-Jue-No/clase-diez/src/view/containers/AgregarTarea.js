import { useDispatch } from "react-redux";
import InputConBoton from "../components/InputConBoton";
import crearAccion from "../../actions/action-creators";

const AgregarTarea = () => {

    const dispatch = useDispatch();

    return (<div>
        <InputConBoton onInput={(value)=>{
            dispatch(crearAccion.agregarTarea(value))
        }}/>
    </div>);
}
 
export default AgregarTarea;