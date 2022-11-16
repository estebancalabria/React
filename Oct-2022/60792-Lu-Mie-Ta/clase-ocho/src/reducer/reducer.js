import { ACT_DECREMENTAR } from "../actions/action.types";

//El unico que puede modificar el store
//Es una funcion de javascript pura
export default function reducer(state, action){
    const newState = {...state}; //se lo copia

    if (action.type === ACT_DECREMENTAR){
        newState.contador--;
    }

    return newState;
}
