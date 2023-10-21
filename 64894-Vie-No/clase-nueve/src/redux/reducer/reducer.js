import * as types from "../actions/action-types";

function reducer (state, action){
    let newState = {...state};

    console.log(action);

    switch (action.type) {
        case types.SET_LOREM:
            newState.lorem = action.payload
            break;
    
        default:
            break;
    }
    return newState;
}

export default reducer;