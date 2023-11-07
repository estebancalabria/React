import axios from "axios";
import { ACT_ADD_CANCION, ACT_ELIMINAR_CANCION, ACT_MODIFICAR_CANCION } from "./action-types";

//thunk => Es una funcion que devuelve un dispatch
const crearAccion = {
    /*agregarCancion : (cancion) =>(
        function(dispatch){
            axios.post("http://localhost:3001/canciones", cancion)
            .then((resp) => {
                dispatch({
                    type: ACT_ADD_CANCION,
                    data: resp.data
                });
            })
        }
    )*/
    agregarCancion: (cancion) => (dispatch) => {
        axios.post("http://localhost:3001/canciones", cancion)
            .then((resp) => {
                dispatch({
                    type: ACT_ADD_CANCION,
                    data: resp.data
                });
            })
    },
    eliminarCancion: (id) => (dispatch) => {
        axios.delete("http://localhost:3001/canciones/" + id).then((resp) => {
            dispatch({
                type: ACT_ELIMINAR_CANCION,
                data: id
            })
        })
    },
    modificarCancion: (cancion) => (dispatch) => {
        axios.put("http://localhost:3001/canciones/" + cancion.id, cancion)
            .then((resp) => {
                dispatch({
                    type : ACT_MODIFICAR_CANCION,   
                    data : cancion
                })             
            })
    }
}


export default crearAccion;