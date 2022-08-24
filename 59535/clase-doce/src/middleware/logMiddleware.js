
const logMiddleware = state => next => action => {
    console.log("Llegando al reducer:", action);
    console.log("State antes:", state.getState());
    next(action); //Manda la accion al reducer
    console.log("State despues:", state.getState());
}

export default logMiddleware;