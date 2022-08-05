import { createStore } from "redux";
import reducer from "../reducers/reducer";

const state = {
    value : 1
}

export default createStore(reducer, state);