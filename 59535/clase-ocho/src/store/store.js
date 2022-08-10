import { createStore } from "redux"
import reducer from "../reducer/reducer"

const state = {
    personas : []
}

export default createStore(reducer, state);