import { ACT_ADD_TASK, ACT_REMOVE_TASK } from "./action-types";

export function actCrearTarea(tarea){
    return {
        type : ACT_ADD_TASK,
        payload : tarea
    }
}

export function actEliminarTarea(id){
    return{
        type : ACT_REMOVE_TASK,
        payload : id
    }
}