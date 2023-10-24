import { ACT_AGREGAR_TAREA, ACT_ELIMINAR_TAREA } from "./action-types";

const crearAccion = {
    agregarTarea: (nombre) => ({
        type: ACT_AGREGAR_TAREA,
        payload: nombre
    }),

    eliminarTarea: (id) => ({
        type: ACT_ELIMINAR_TAREA,
        payload: id
    })
}

export default crearAccion;