import axios from "axios";
import { ACT_ADD_CANCION } from "./action-types";

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
    agregarCancion : (cancion) =>(dispatch) => {
        axios.post("http://localhost:3001/canciones", cancion)
            .then((resp) => {
                dispatch({
                    type: ACT_ADD_CANCION,
                    data: resp.data
                });
            })
    }
}

export default crearAccion;