import { INIT_ALUMNOS, ADD_ALUMNO, DELETE_ALUMNO } from "./action-types";
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

export function deleteAlumno(id){
    return function(dispatch){
        axios.delete("http://localhost:3001/alumnos/"+id).then((resp)=>{
            dispatch({
                type : DELETE_ALUMNO,
                payload: id
            })    
        })
    }
    /*return {
        type : DELETE_ALUMNO,
        payload: id
    }*/
}
