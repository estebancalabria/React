import { ACT_RESPONSE_ATACAR } from "../actions/action-types";

export default  (state, action) => {
    //alert(JSON.stringify(state));
    let newState = {...state};
    newState.personaje = {...state.personaje};

    switch (action.type) {
        case ACT_RESPONSE_ATACAR:
            newState.personaje.xp += action.payload;

            newState.personaje.nivel = Math.floor(newState.personaje.xp / 1000);

            if (newState.personaje.nivel>state.personaje.nivel){
                newState.personaje.hp = newState.personaje.maxHp
            }
            break;
    
        default:
            break;
    }

    return newState;
}