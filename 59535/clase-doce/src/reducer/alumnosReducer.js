import { ADD_ALUMNO, DELETE_ALUMNO, INIT_ALUMNOS } from "../actions/action-types";

export default (state,action) =>{
    let newState = {...state};

    switch (action.type) {
        case INIT_ALUMNOS:
            newState.alumnos = action.payload;
            break;
        case ADD_ALUMNO:
            //newState.alumnos.push(action.payload)
            newState.alumnos = [...newState.alumnos, action.payload];
            break;
        case DELETE_ALUMNO:
            newState.alumnos 
            = newState.alumnos.filter((a)=>(a.id !== action.payload))
            break;
        default:
            break;
    }

    return newState;
}