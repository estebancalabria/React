import * as types from "../actions/action-types";

function reducer(state, accion) {
    let newState = { ...state };

    switch (accion.type) {
        case types.ACT_INCREMENTAR:
            newState.contador++;
            break;
        case types.ACT_DECREMENTAR:
            newState.contador--;
            break;
        case types.ACT_RESET:
            newState.contador = 0;
            break;
        default:
            break;
    }

    return newState;
}

export default reducer;