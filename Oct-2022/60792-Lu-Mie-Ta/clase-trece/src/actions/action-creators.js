import { ACT_GET_ALUMNOS } from "./action-types";
import axios from "axios";

/*export function actListarAlumnos(alumnos){
    return {
        type : ACT_GET_ALUMNOS,
        payload:alumnos
    }
}*/

//Opcion 3 : Usar el middleware de thunk
export function actListarAlumnos() {
    return function (dispatch) {
        axios.get("http://localhost:3001/alumnos").then((resp) => {
            dispatch({
                type: ACT_GET_ALUMNOS,
                payload: resp.data
            })
        });
    }
}