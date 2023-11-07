import axios from "axios";
import { ACT_INIT_STORE, ACT_ADD_CANCION, ACT_ELIMINAR_CANCION, ACT_MODIFICAR_CANCION } from "./action-types";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: (state, action) => {
        let newState = { ...state };

        (action.type === ACT_INIT_STORE)
            && (newState.canciones = action.data);

        (action.type === ACT_ADD_CANCION)
            && (newState.canciones = [...state.canciones, action.data]);

        (action.type === ACT_ELIMINAR_CANCION)
            && (newState.canciones = state.canciones.filter((item) => (item.id !== action.data)));

        (action.type === ACT_MODIFICAR_CANCION)
            && (newState.canciones = state.canciones.map(
                item => ((item.id !== action.data.id) ? item : action.data)))

        return newState;
    },
    preloadedState: {
        canciones: []
    }
});

axios.get("http://localhost:3001/canciones")
    .then((resp) => {
        store.dispatch({
            type: ACT_INIT_STORE,
            data: resp.data
        })
    }).catch((err) => {

    })


export default store;