import { INIT_TAREAS } from "../actions/action-types";

export default (state:any, action:any) =>{

    let newState = {...state};

    switch (action.type) {
        case INIT_TAREAS:
            newState.tareas = action.payload;
            break;
    
        default:
            break;
    }

    return newState;
}