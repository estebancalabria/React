import * as actionTypes from "./action-types";

export function actionInicializarListaTareas(tareas){
    return {
        type : actionTypes.INIT_TAREAS,
        payload : tareas
    };
}