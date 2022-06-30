import axios from "axios";
import { ACT_INIT_TAREA } from "../actions/action-types";

const fetchMiddleware = store => dispatch => action =>{
    if (action.type === ACT_INIT_TAREA){
        const url = "http://localhost:3001/tareas";
        axios.get(url).then( (resp)=>{
            action.payload = resp.data;
            dispatch(action);
        });
    }else{
        dispatch(action);
    }
}

export default fetchMiddleware;