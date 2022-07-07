import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers/reducer";
import createSagaMiddleware from "redux-saga";
import sagaMiddlewareMain from "../saga/sagaMiddleware";

let heroe = {
   nombre : "Tony",
   hp : 10000,
   xp : 0,
   level : 1,
   alive : true,
   stats : []
}

let sagaMiddleware = createSagaMiddleware();
export default createStore(reducer, heroe, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaMiddlewareMain);