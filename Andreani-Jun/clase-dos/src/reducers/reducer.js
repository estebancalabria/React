import * as actions from "../actions/action-types";

function reducer(state, action){
    let newState = [...state];
    switch (action.type) {
        case actions.ACT_INIT_TAREA:
            newState = action.payload;
            break;
        case actions.ACT_AGREGAR_TAREA:
            newState = [
                ...state,
                {
                    
                    id : Math.max(...state.map(t => t.id),0)+1,
                    nombre : action.nombre,
                    done : false
                }
            ]
            break;
        case actions.ACT_ELIMINAR_TAREA:
            newState = newState.filter(t => t.id != action.id);
            break;
        default:
            break;
    }
    return newState;
}

export default reducer;