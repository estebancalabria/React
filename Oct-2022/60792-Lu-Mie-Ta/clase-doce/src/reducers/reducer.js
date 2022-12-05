import { ACT_ADD_TASK, ACT_REMOVE_TASK } from "../actions/action-types";


export default function reducer(state,action) {
    let newState = {...state};
    switch (action.type) {
        case ACT_ADD_TASK:
            newState.tasks = [
                ...newState.tasks,
                {...action.payload, 
                 id : newState.tasks.length+1}
            ]
            break;
        case ACT_REMOVE_TASK:
            newState.tasks = newState.tasks.filter((t)=>(t.id != action.payload));
            break;
        default:
            break;
    }
    return newState;
}