import { ACT_RESPONSE_ATACAR, ACT_RESPONSE_DAMAGE } from "../actions/action-types";

export default (state, action) => {
    //alert(JSON.stringify(state));
    let newState = { ...state };
    newState.personaje = { ...state.personaje };

    switch (action.type) {
        case ACT_RESPONSE_ATACAR:
            if (newState.personaje.alive) {
                newState.personaje.xp += action.payload;

                newState.personaje.nivel = Math.floor(newState.personaje.xp / 1000);

                if (newState.personaje.nivel > state.personaje.nivel) {
                    newState.personaje.hp = newState.personaje.maxHp
                }
            }
            break;
        case ACT_RESPONSE_DAMAGE:
            if (newState.personaje.alive) {
                newState.personaje.hp -= action.payload;
                if (newState.personaje.hp <= 0) {
                    newState.personaje.alive = false;
                    newState.personaje.xp = 0;
                }
            }
            break;
        default:
            break;
    }

    return newState;
}