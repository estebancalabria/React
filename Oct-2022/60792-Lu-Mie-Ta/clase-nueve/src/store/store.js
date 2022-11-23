import reducer from "../reducers/reducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    preloadedState :{
        tareas : [
            {id:1, nombre:"Hacer los examenes del Alumni", done:false},
            {id:2, nombre:"Subcribirse al canal de IG del profe", done:false},
            {id:3, nombre:"Subcribirse al canal de YouTube del profe", done:false},
            {id:4, nombre:"Participar en clase", done:false}
        ]
    },
    reducer : reducer
});

export default store;