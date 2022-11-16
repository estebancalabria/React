import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";

const store = configureStore({
    preloadedState : {
        contador : 255
    },
    //Despues vemos que es el reducer
    reducer : reducer
})

export default store;