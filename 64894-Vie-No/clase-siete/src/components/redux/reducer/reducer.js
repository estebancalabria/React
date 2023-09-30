import * as actionTypes from "../actions/action-types";

export default function reducer(state, action) {
    let newState = { ...state };

    switch (action.type) {
        case actionTypes.ACT_INCREMENTAR:
            newState.contador = newState.contador + 1;
            break;
        case actionTypes.ACT_DECREMENTAR:
            newState.contador = newState.contador - 1;
            break;
        case actionTypes.ACT_RESET:
            newState.contador = 0;
            break;

        default:
            break;
    }

    return newState;
}