import { createStore } from "redux";
import counterReducer from "../reducer/counterReducer";

const defaultStore = {
    value: 1
};

export default createStore(counterReducer, defaultStore);
