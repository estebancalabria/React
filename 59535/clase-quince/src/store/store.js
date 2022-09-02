import { configureStore } from "@reduxjs/toolkit";
import request2reponse from "../middleware/request2reponse";
import characterReducer from "../reducer/characterReducer";
import createSagaMiddleware from "@redux-saga/core";
import sagaMain from "../saga/sagaMiddleware";

const sagaMiddleware = createSagaMiddleware();

export default configureStore(
    {
        preloadedState : {
            personaje : {
                nombre : "Drax",
                hp : 1000,
                maxHp : 1000,
                xp : 10,
                nivel : 1,
                alive : true,
                dmg : 3
            }
        },
        reducer : characterReducer,
        middleware : [/*request2reponse*/ sagaMiddleware]
    }
)
sagaMiddleware.run(sagaMain);