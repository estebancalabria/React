import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Lista from "../components/Lista";
import crearAccion from "../actions/action-creators";
import Swal from "sweetalert2";


const ListaDeTareas = () => {

    let dispatch = useDispatch();
    let tareas = useSelector(state=>state.tareas);
    
    return (<Lista 
        titulo="Mis Tareas" 
        items={tareas} 
        renderAccionItem={(id)=>(
        <Bs.Button variant="danger" onClick={()=>{
            Swal.fire({
                title : "Esta seguro?",
                text : "Confime para eliminar la tarea",
                showCancelButton : true,
                icon : "warning"
            }).then((resp)=>{
                let accion = crearAccion.eliminarTarea(id);
                resp.isConfirmed && dispatch(accion);
            });
        }}>
            Eliminar
        </Bs.Button>)
    }/>);
}
 
export default ListaDeTareas;