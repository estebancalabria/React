import axios from "axios";

const { configureStore } = require("@reduxjs/toolkit");

const ACT_INIT_STORE = "ACT_INIT_STORE";

const store = configureStore({
    reducer : (state, action) =>{
        let newState = {...state};
        (action.type===ACT_INIT_STORE) && (newState.canciones = action.data);
        return newState;
    },
    preloadedState : {
        canciones : []
    }
});

axios.get("http://localhost:3001/canciones").then((resp)=>{
    store.dispatch({
        type : ACT_INIT_STORE,
        data : resp.data
    })
})


export default store;