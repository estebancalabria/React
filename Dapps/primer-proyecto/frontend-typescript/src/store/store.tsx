import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "../reducer/tareasReducer";

let store = configureStore({
    reducer : tareasReducer,
    preloadedState : {tareas : []}
})

export default store;