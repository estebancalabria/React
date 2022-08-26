import { INIT_ALUMNOS, ADD_ALUMNO, DELETE_ALUMNO, EDIT_ALUMNO } from "./action-types";
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
}

export function editarAlumno(alumno){
    return function(dispatch){
        axios.put("http://localhost:3001/alumnos/"+alumno.id, alumno).then((resp)=>{
            dispatch({
                type : EDIT_ALUMNO,
                payload : alumno
            });      
        })
    }
}
