import { configureStore } from "@reduxjs/toolkit";
import elUnicoQueModificaLosDatos from "../reducer/reducer";

export default configureStore({
    reducer : elUnicoQueModificaLosDatos,
    preloadedState :{
        tareas : [
            {id:1, nombre:"Hacer las compras", done:false},
            {id:2, nombre:"Lavar la ropa", done:false},
            {id:3, nombre:"Arreglar la compu", done:false}
        ]
    }
})