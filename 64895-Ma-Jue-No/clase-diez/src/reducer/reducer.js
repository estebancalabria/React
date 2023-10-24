import * as tipoAccion from "../actions/action-types";

function reducer(state, action) {
    let newState = { ...state };

    switch (action.type) {
        case tipoAccion.ACT_AGREGAR_TAREA:
            newState.tareas = [
                ...state.tareas,
                {
                    id: Math.max(...state.tareas.map((t)=>(t.id)),0)+1,
                    nombre: action.payload,
                    done:false
                }
            ]
            break;
        case tipoAccion.ACT_ELIMINAR_TAREA:
            newState.tareas = state.tareas.filter((t)=>(t.id != action.payload))
            break;

        default:
            break;
    }

    return newState;
}

export default reducer