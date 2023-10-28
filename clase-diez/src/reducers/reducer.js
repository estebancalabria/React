import * as actionTypes from "../actions/actions-types";

function reducer(state, accion){

    let newState = {...state};

    (accion.type === actionTypes.ACT_AGREGAR_TAREA) && (newState.tareas = [
        ...state.tareas,
        {
            id: Math.max(...state.tareas.map(t=>t.id),0)+1,
            nombre : accion.nombre,
            done: false
        }
    ]);

    (accion.type === actionTypes.ACT_ELIMINAR_TAREA) && (
        newState.tareas = state.tareas.filter((t)=>(t.id !== accion.id))
    );

    return newState;
}

export default reducer;