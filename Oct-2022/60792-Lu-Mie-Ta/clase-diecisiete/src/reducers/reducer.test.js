import { ACT_DECREMENT, ACT_INCREMENT } from "../actions/action-types";
import reducer from "./reducer"


test("reducer test incrementar", ()=>{
    let state = {contador : 5};
    let action = {type :ACT_INCREMENT};
    let newState = reducer(state, action);
    expect(newState).toStrictEqual({contador:6});
})

test("reducer test decrementar", ()=>{
    let state = {contador : 5};
    let action = {type :ACT_DECREMENT};
    let newState = reducer(state, action);
    expect(newState).toStrictEqual({contador:4});
})