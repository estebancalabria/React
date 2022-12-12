import {put, delay, call} from "redux-saga/effects";
import axios from "axios";
import { ACT_REQUEST_DEFENDER } from "../actions/action-types";

const URL_RANDOM = "https://www.randomnumberapi.com/api/v1.0/random?min=50&max=200&count=1";

export default function* sagaMain(){
    while (true){
        yield delay(3000);
        let resp = yield call(axios.get, URL_RANDOM);
        let azar = resp.data[0];
        yield put({type: ACT_REQUEST_DEFENDER, payload  : azar})
    }
}