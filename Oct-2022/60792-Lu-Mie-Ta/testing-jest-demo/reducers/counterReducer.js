const { ACT_INCREMENTAR } = require("../actions/action-types");

function counteReducer(state,action){
    let newState = {...state};

    switch (action.type) {
        case ACT_INCREMENTAR:
            newState.count = newState.count + 1;
            break;
    
        default:
            break;
    }

    return newState;
}

module.exports = {
    counteReducer
}