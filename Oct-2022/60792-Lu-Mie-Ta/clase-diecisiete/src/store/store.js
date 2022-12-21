import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer";

const store = configureStore({
    preloadedState : {contador : 0},
    reducer : reducer,
    middleware : [thunk]
})

export default store;