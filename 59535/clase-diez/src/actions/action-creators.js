import { INIT_ALUMNOS } from "./action-types";

export function initAlumnosAction(alumnos){
    return {
        type : INIT_ALUMNOS,
        payload : alumnos
    }
}