import { useDispatch } from "react-redux";
import InputConBoton from "../components/InputConBoton";
import crearAccion from "../actions/action-creators";

const AgregarTarea = () => {
    const dispatch = useDispatch();

    return (<InputConBoton 
        placeholder="Ingrese Tarea Nueva"
        textoBoton="Agregar"
        onAccion={(nombre)=>{
            let accion = crearAccion.nuevaTarea(nombre);
            dispatch(accion);
        }} />);
}
 
export default AgregarTarea;
