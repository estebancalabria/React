import * as Actions from "../action/action-types";

function counterReducer(state, action){
    let newState = {...state};

    switch (action.type) {
        case Actions.ACT_INCREMENTAR:
            newState.value++;
            break;
        case Actions.ACT_DECREMENTAR:
            newState.value--;
            break;
        default:
            break;
    }

    return newState;
}

export default counterReducer;