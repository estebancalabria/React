import axios from "axios";
import { initAlumnosAction } from "../actions/action-creators";
import logMiddleware from "../middleware/logMiddleware";
import alumnosReducer from "../reducer/alumnosReducer";
import thunk from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer : alumnosReducer,
    preloadedState : { alumnos : []},
    middleware : [logMiddleware, thunk]
});


axios.get("http://localhost:3001/alumnos").then((resp)=>{
    let accion = initAlumnosAction(resp.data);
    store.dispatch(accion);
});

export default store;