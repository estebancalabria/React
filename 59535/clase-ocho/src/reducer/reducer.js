import { INIT_PERSONAS } from "../actions/action-types";

function reducer(state,action){
    let newState = {...state};
    switch (action.type) {
        case INIT_PERSONAS:
            newState.personas = action.payload;
            break;
    
        default:
            break;
    }
    return newState;
}

export default reducer;