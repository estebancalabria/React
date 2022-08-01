import * as Actions from "../actions/action-types";

//el atributo type y el atributo payload son parte de un
//objeto json que representa a mi accion
export default function reducer(state, action){
    let newState = {...state};
    switch (action.type) {
        case Actions.ACT_ADD_TODO:
            const nuevaAccion = {
                id : Math.max(...state.tareas.map(t=>t.id),0) + 1,
                ...action.payload
            }
            newState.tareas = [...newState.tareas, nuevaAccion];
            break;

       case Actions.ACT_INIT_TODO:
           newState.tareas = action.payload;
           break;

        default:
            break;
    }
    //procesar la logica de negocios...
    /*if (action.type === Actions.ACT_ADD_TODO) {
        //Falta logica de negocios y validaciones, etc...
        newState.tareas = [...newState.tareas, action.payload]
    }*/
    return newState;
}