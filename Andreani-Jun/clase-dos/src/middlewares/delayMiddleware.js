
const delayMiddleware = store => next => action =>{
  setTimeout(()=>{
    next(action);
  },800);
}

export default delayMiddleware;