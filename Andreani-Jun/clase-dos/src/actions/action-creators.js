import { ACT_AGREGAR_TAREA, ACT_ELIMINAR_TAREA, ACT_INIT_TAREA } from "./action-types";
import axios from "axios";

const url = "http://localhost:3001/tareas";


export function agregarTarea(nombreTarea){
    return dispatch => {
        axios.post(url, {nombre : nombreTarea, done:false}).then((resp)=>{
            dispatch({
                type : ACT_AGREGAR_TAREA,
                nombre : nombreTarea
            });
        })
    }
    /*
    return {
        type : ACT_AGREGAR_TAREA,
        nombre : nombreTarea
    }*/
}

export function eliminarTarea(id){
    return dispatch => {
        axios.delete(url + "/"  + id).then( response => {
            dispatch({
                type: ACT_ELIMINAR_TAREA,
                id: id,
            })
         });
    }
}

export function initTareas(){
    //Despues del thunk
    return function(dispatch){
        axios.get(url).then( (resp)=>{
            dispatch({
                type : ACT_INIT_TAREA,
                payload : resp.data
            });
        });
    }
    //Antes de Thunk
    /*return {
        type : ACT_INIT_TAREA,
        payload : []
    }*/
}