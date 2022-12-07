import { ACT_GET_ALUMNOS } from "../actions/action-types";
import axios from "axios";

//opcion 2 para la llamada Asincronica
const getAlumnosMiddleware = state => dispatch => action =>{
    if (action.type === ACT_GET_ALUMNOS){
       axios.get("http://localhost:3001/alumnos").then((resp)=>{
            action.payload =resp.data;
            dispatch(action);
        });
    }else{
        dispatch(action);
    }
}

export default getAlumnosMiddleware;