import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";
import sagaMain from "../saga/sagaMain";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    preloadedState : {
        heroe : {
            nombre : "Dibu Martinez",
            vida : 1000,
            maxVida : 1000,
            nivel : 1,
            experiencia : 0,
            ataque : 10,
            vivo : true
        }
    },
    reducer : reducer,
    middleware : [sagaMiddleware]
});

sagaMiddleware.run(sagaMain);

export default store;