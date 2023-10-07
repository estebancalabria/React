import * as actionTypes from "../actions/action-types";

function tareasReducer(state, action){
    let newState = {...state};

    switch (action.type) {
        case actionTypes.INIT_TAREAS:
            newState.tareas = action.payload
            break;
    
        default:
            break;
    }

    return newState;
}

export default tareasReducer;