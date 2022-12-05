
const logMiddleware = store => dispatch => action =>{
    console.log("Va a llegar al reducer", action.type, store.getState());
    dispatch(action); //Manda la accion al reducer
    console.log("Despues a llegar al reducer", action.type, store.getState());
}

export default logMiddleware;