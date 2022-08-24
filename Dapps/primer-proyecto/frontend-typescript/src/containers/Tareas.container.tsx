import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Tareas from "../components/Tareas";
import { TareaService } from "../services/tarea.service";
import { Tarea } from "../models/Tarea";
import { INIT_TAREAS } from "../actions/action-types";

/*function mapStateToProps(state:any){
    return {
        tareas:state.tareas
    }
}*/

export default (props:any) => {
    //const [tareas, setTares] = useState<Tarea[]>([]);
    const navigate = useNavigate();
    const service : TareaService = new TareaService();
    //el dispatch es una funcion que manda una accion al reducer
    const dispatch = useDispatch(); 
    //mapStateToProps
    const tareas:any = useSelector( (state:any) => (state.tareas) );   

    //TODO: POr ahora hacemos la llamada asicronica aqui
    useEffect(() => {
        service.getAll().then((resp) => {
            //setTares(resp);
            dispatch({type:INIT_TAREAS, payload:resp});
        }).catch((err)=>{
            localStorage.removeItem("token");
            navigate("/login");
        })
    }, []);

    return <Tareas tareas={tareas} {...props} />
}