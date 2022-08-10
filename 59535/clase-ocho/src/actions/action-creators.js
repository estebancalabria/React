import { INIT_PERSONAS } from "./action-types";

export function initPersonas(personas){
    return {
        type : INIT_PERSONAS,
        payload: personas
    }
}