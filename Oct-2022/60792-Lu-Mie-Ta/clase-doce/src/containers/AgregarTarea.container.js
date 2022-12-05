import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actCrearTarea } from "../actions/action-creators";
import FormularioTarea from "../components/FormularioTarea";

export default function AgregarTarea(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return <FormularioTarea 
        onCancel={()=>{navigate(-1)}}
        onAccept={(tarea)=>{
            const accion = actCrearTarea(tarea);
            dispatch(accion);
            navigate(-1);
        }} />
}
