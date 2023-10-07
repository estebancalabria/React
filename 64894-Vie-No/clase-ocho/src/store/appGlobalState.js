import { configureStore } from "@reduxjs/toolkit"
import tareasReducer from "../reducer/tareasReducer";

const defaultData = {
    /* Paremos las rotativas */
    /* Aca va informacion del "negocio" */
    /* Por un tema didactico agrego tambien cosas adicionales como el titulo y subtitulo */

    titulo : "Bienvenidos al curo de React",
    subtitulo : "Hoy Seguimos a full con Redux",
    tareas : []
    /*tareas : [
        {id:1, nombre:"Ver Serie The Walking Dead", done:false},
        {id:2, nombre:"Sale Cafecitoooo", done:false},
        {id:3, nombre:"Sale Cafecitoooo", done:false},
        {id:4, nombre:"Salir a un Bar cualquiera", done:false},
        {id:5, nombre: "Leer el manga de ONE PUCH MAN", done: false }
    ]*/
}

export default configureStore({
    preloadedState : defaultData,
    //reducer : (s,a)=>(s)
    reducer : tareasReducer
});