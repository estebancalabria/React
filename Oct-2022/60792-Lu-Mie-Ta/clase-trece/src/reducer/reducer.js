import { ACT_ADD_ALUMNO, ACT_GET_ALUMNOS } from "../actions/action-types";

export default function reducer(state, action){
 
    let newState = {...state};

    switch (action.type) {
        case ACT_GET_ALUMNOS:
            newState.alumnos = action.payload
            break;
    
        default:
            break;
    }

    return newState;
}

