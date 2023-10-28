import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";

export default configureStore({
    reducer : reducer,
    preloadedState : {
        tareas : [
            {id:1 , nombre : "Aprender React Native", done:false},
            {id:2 , nombre : "Conquistar el ambiciosos", done:false},
            {id:3 , nombre : "Recorrer la muralla China", done:false}
        ]
    }
})