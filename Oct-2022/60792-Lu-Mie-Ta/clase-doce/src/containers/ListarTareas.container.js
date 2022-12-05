import ListarTareas from "../components/ListarTareas";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actEliminarTarea } from "../actions/action-creators";

export default function ListarTareasContainer(){

    const navigate = useNavigate();    
    const lastareas = useSelector((state)=>(state.tasks));
    const dispatch = useDispatch();
    return <ListarTareas 
        tareas={lastareas}
        onAgregar={()=>{navigate("/agregar")}} 
        onEliminar={(id)=>{
            let accion = actEliminarTarea(id);
            dispatch(accion);
        }}/>
}

