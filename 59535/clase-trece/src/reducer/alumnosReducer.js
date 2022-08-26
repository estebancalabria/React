import { ADD_ALUMNO, DELETE_ALUMNO, EDIT_ALUMNO, INIT_ALUMNOS } from "../actions/action-types";

export default (state, action) => {
    let newState = { ...state };
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
                = newState.alumnos.filter((a) => (a.id !== action.payload));
            break;
        case EDIT_ALUMNO:
            newState.alumnos
                = newState.alumnos.map((a) => ((a.id === action.payload.id) ? action.payload : a));

            /*for (let alu of newState.alumnos){
                if (alu.id === action.payload.id){
                    alu.id = action.payload.id;
                    alu.nombre = action.payload.nombre;
                    alu.apellido = action.payload.apellido;
                    alu.profesion = action.payload.profesion;
                }
            }*/
            break;
        default:
            break;
    }

    return newState;
}