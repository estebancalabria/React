import { ACT_REQUEST_ATACAR, ACT_REQUEST_DEFENDER } from "../actions/action-types";

function reducer(state, action) {
    let newState = { ...state };

    switch (action.type) {
        case ACT_REQUEST_DEFENDER:
            if (newState.heroe.vivo) {
                newState.heroe = {...state.heroe};
                newState.heroe.vida -= action.payload;
                if (newState.heroe.vida < 1) { newState.heroe.vivo = false }
            }
            break;
        case ACT_REQUEST_ATACAR:
            if (newState.heroe.vivo) {
                newState.heroe = {...state.heroe};
                newState.heroe.experiencia += action.payload;
                if (newState.heroe.experiencia>1000*newState.heroe.nivel){
                    newState.heroe.nivel += 1;
                    newState.heroe.vida = newState.heroe.maxVida;
                }
            }
            break;
        default:
            break;
    }

    return newState;
}

export default reducer;