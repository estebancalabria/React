import { ACT_SUMAR } from "../actions/action-types";

function reducer(state, action){
    let newState = {...state};

    if (action.type == ACT_SUMAR){
        newState.value++;
    }

    return newState;

}

export default reducer;