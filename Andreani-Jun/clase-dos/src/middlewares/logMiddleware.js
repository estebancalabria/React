
const logMiddleware = store => dispatch => action => {
    console.log("Accion Interceptada " + action.type);
    console.log("Store Antes : ", store.getState());
    dispatch(action);
    console.log("Store Despues : ", store.getState());
}

export default logMiddleware;