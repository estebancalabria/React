//import sumar from "../sumar";
let {sumar} = require("../sumar.js");

describe("probar que sume bien", ()=>{
    test("dos mas dos son cuatro", ()=>{
        let res = sumar(2,2);
        expect(res).toBe(4);
    })
})