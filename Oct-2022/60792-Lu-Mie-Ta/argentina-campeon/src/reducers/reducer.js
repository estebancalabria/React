import { ACT_RESPONSE_JUGADORES, BEGIN_LOAD, END_LOAD } from "../actions/action-types";

export default function reducer(state, action) {
    let newState = { ...state };

    switch (action.type) {
        case ACT_RESPONSE_JUGADORES:
            newState.jugadores = [...newState.jugadores,
            ...action.payload]
            break;
        case BEGIN_LOAD:
            newState.loading = true;
            break;
        case END_LOAD:
            newState.loading = false;
            break;
        default:
            break;
    }
    return newState;
}