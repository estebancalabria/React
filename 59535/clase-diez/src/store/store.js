import axios from "axios";
import { initAlumnosAction } from "../actions/action-creators";
import logMiddleware from "../middleware/logMiddleware";
import alumnosReducer from "../reducer/alumnosReducer";


const { configureStore } = require("@reduxjs/toolkit")

const state = {
    alumnos : [
        {id:1,nombre:"bb",apellido:"bb", profesion :"aaa"}
    ]
}

const store = configureStore({
    reducer : alumnosReducer,
    preloadedState : { alumnos : []},
    middleware : [logMiddleware]
});

/*setTimeout(()=>{
    let accion = initAlumnosAction(state.alumnos);
    store.dispatch(accion);
},2000);*/
axios.get("http://localhost:3001/alumnos").then((resp)=>{
    let accion = initAlumnosAction(resp.data);
    store.dispatch(accion);
});

export default store;