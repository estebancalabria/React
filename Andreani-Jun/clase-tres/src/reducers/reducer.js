import Actions from "../actions/actions";

export default function reducer(state, action){
   let newState = {...state};

   switch (action.type) {
    case Actions.GAIN_XP:
        if (newState.alive) {
            newState.xp += action.payload;
            newState.level = Math.floor(newState.xp / 1000) + 1; //cada 1000 xp sube de nivel
        }
        break;
    case Actions.TAKE_DAMAGE:
        newState.hp = Math.max(newState.hp-action.payload, 0);
        (newState.hp === 0) && (newState.alive = false);
        //if (newState.hp<0) { newState.alive = false;}
        break;
    default:
        break;
   }
   return newState;
}