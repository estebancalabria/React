import axios from "axios";
import { takeEvery, call, put, delay} from "redux-saga/effects"
import { ACT_REQUEST_JUGADORES, ACT_RESPONSE_JUGADORES, BEGIN_LOAD, END_LOAD } from "../actions/action-types"

function* requestJugadores(){
    yield put({type:BEGIN_LOAD});
    yield delay(3000);
    const URL = "http://localhost:3001/jugadores";
    const resp = yield call(axios.get, URL);
    yield put({type:ACT_RESPONSE_JUGADORES, payload : resp.data});
    yield put({type:END_LOAD});
}

export default function* sagaMain(){
    yield takeEvery(ACT_REQUEST_JUGADORES, requestJugadores);    
}