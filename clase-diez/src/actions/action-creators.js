import * as actionTypes from "./actions-types";

const crearAccion = {
    nuevaTarea : (nombre) => ({ type : actionTypes.ACT_AGREGAR_TAREA, nombre: nombre}),
    eliminarTarea : (id) =>({type : actionTypes.ACT_ELIMINAR_TAREA, id : id}),
    realizarTarea : (id) =>({type : actionTypes.ACT_DONE_TAREA, id : id})
}

export default crearAccion;