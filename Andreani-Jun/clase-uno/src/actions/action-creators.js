import { ACT_AGREGAR_TAREA, ACT_ELIMINAR_TAREA } from "./action-types";

export function agregarTarea(nombreTarea){
    return {
        type : ACT_AGREGAR_TAREA,
        nombre : nombreTarea
    }
}

export function eliminarTarea(id){
    return {
        type : ACT_ELIMINAR_TAREA,
        id : id
    }
}