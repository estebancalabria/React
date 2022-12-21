import { ACT_DECREMENT, ACT_INCREMENT } from "../actions/action-types";

export default function reducer(state, action){
    let newState = {...state};

    switch (action.type) {
        case ACT_INCREMENT:
            newState.contador++;
            break;
        case ACT_DECREMENT:
            newState.contador--;
            break;
        default:
            break;
    }

    return newState;
}