import { configureStore } from "@reduxjs/toolkit";
import logMiddleware from "../middlewares/logMiddleware";
import reducer from "../reducers/reducer";

export default configureStore({
    preloadedState : {
        tasks : [
            {id:1, nombre:"Comprar Comida", done:false},
            {id:2, nombre:"Jugar al Prode", done:false},
            {id:3, nombre:"Alentar a la seleccion", done:false}
        ]
    },
    reducer : reducer,
    middleware: [logMiddleware]
})
