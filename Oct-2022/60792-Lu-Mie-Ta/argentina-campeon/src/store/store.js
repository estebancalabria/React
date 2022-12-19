import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { ACT_REQUEST_JUGADORES } from "../actions/action-types";
import reducer from "../reducers/reducer";
import sagaMain from "../saga/sagaMain";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    preloadedState : {
        loading:false,
        jugadores: []
    },
    reducer : reducer,
    middleware : [sagaMiddleware]
});

sagaMiddleware.run(sagaMain);

store.dispatch({
    type:ACT_REQUEST_JUGADORES
});

export default store;