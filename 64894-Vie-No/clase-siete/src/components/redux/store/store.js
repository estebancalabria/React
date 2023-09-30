import { configureStore } from "@reduxjs/toolkit"
import reducer from "../reducer/reducer";

const defaultStoreData = {
    contador : 0
}

const store = configureStore({
    preloadedState : defaultStoreData,
    
    //Reducer hardcodeado
    //reducer : (s,a) => (s)

    reducer : reducer
});

export default store;