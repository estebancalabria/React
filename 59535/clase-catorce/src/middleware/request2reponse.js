
export default store => next => action =>{
    action.type = action.type.replace("_REQUEST_","_RESPONSE_");
    next(action);
}