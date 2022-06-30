import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/reducer";
import logMiddleware from "../middlewares/logMiddleware";
import delayMiddleware from "../middlewares/delayMiddleware";
import { initTareas } from "../actions/action-creators";
import fetchMiddleware from "../middlewares/fetchMiddleware";
import thunk from "redux-thunk";

const tareas = []

 let store = createStore(reducer, 
  tareas, 
  applyMiddleware(delayMiddleware, thunk, logMiddleware));

  store.dispatch(initTareas());

  export default store;