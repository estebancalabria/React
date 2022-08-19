import { INIT_ALUMNOS, ADD_ALUMNO } from "./action-types";
import axios from "axios";

export function initAlumnosAction(alumnos) {
    return {
        type: INIT_ALUMNOS,
        payload: alumnos
    }
}

//Sabor 1
/*export function addAlumno(alumno){
    return {
        type : ADD_ALUMNO,
        payload : alumno
    }
}*/

//Sabor 2 - Thunk Style
export function addAlumno(alumno) {
    return function (dispatch) {
        axios.post("http://localhost:3001/alumnos", alumno)
            .then((resp) => {
                dispatch({
                    type : ADD_ALUMNO,
                    payload : resp.data
                })
            });
    }
}