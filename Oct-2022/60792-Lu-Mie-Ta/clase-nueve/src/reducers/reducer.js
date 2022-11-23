import { ACT_ADD_TASK } from "../actions/action-types";

function reducer (oldState, action){
    let newState = {...oldState};

    switch (action.type) {
        case ACT_ADD_TASK:
            newState.tareas = [...newState.tareas, {
                id : newState.tareas.length + 1,
                nombre : action.nombre, 
                done: false
            }];
            break;
    
        default:
            break;
    }

    return newState;
}

export default reducer;