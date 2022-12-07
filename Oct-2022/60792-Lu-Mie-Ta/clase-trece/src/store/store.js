import { configureStore } from "@reduxjs/toolkit";
//import axios from "axios";
//import { actListarAlumnos } from "../actions/action-creators";
//import getAlumnosMiddleware from "../middleware/get-alumnos.middleware";
import elreducer from "../reducer/reducer";


const store = configureStore({
    preloadedState:{
        alumnos:[]
    },
    reducer:elreducer,

    //opcion 2 para la llamada Asincronica
    //middleware : [getAlumnosMiddleware]
})


//Opcion 1 para llamada asincronica
/*axios.get("http://localhost:3001/alumnos").then((resp)=>{
    let accion = actListarAlumnos(resp.data);
    store.dispatch(accion);
});*/

export default store;