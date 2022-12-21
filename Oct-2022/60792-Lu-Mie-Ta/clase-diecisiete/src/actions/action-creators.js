import { ACT_INCREMENT } from "./action-types"

export function incrementarAction(){
    return function(dispatch){
        let accion = {type:ACT_INCREMENT}
        //Simulo una llamada asincronica
        //Despacho la accion al tener la respuesta de la llamada async
        setTimeout(()=>{
            dispatch(accion);    
        }, 2000);
        //dispatch(accion);
    }
}