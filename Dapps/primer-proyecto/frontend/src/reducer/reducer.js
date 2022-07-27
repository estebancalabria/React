import * as Actions from "../actions/action-types";

//el atributo type y el atributo payload son parte de un
//objeto json que representa a mi accion
export default function reducer(state, action){
    let newState = {...state};
    //procesar la logica de negocios...
    if (action.type === Actions.ACT_ADD_TODO) {
        //Falta logica de negocios y validaciones, etc...
        newState.tareas = [...newState.tareas, action.payload]
    }
    return newState;
}