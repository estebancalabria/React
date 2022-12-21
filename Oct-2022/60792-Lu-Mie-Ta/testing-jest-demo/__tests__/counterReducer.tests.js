const { ACT_INCREMENTAR } = require("../actions/action-types")
const { counteReducer } = require("../reducers/counterReducer")

describe("Prueba Reducer", ()=>{
    test("Text Accion ACT_INCREMENTAR", ()=>{
        let state = {
            count : 5
        }
        let newState = counteReducer(state, {type : ACT_INCREMENTAR});
        expect(newState).toStrictEqual({count:6})
    })
});