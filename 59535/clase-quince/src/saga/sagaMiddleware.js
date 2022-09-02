import {takeEvery, put, delay, call, select} from "redux-saga/effects"
import { ACT_REQUEST_ATACAR, ACT_REQUEST_DAMAGE, ACT_RESPONSE_ATACAR, ACT_RESPONSE_DAMAGE } from "../actions/action-types"
import axios from "axios";

const URL = "http://www.randomnumberapi.com/api/v1.0/random?min=10&max=100&count=1";

function* atacar(){
    //yield delay(300);
    let resp = yield call(axios.get, URL)
    yield put({ type:ACT_RESPONSE_ATACAR, payload: resp.data[0] })
}

function* damage(){
    let resp = yield call(axios.get, URL)
    yield put({ type:ACT_RESPONSE_DAMAGE, payload: resp.data[0] })
}

export default function* sagaMain(){
    yield takeEvery(ACT_REQUEST_DAMAGE, damage);
    //Aca va la logica del juego
    let alive = yield select(state => state.personaje.alive);
    while (alive){
        //console.log("Esta vivo");
        let alive = yield select(state => state.personaje.alive);
        yield delay(1000);
        yield damage();
        alive = yield select(state => state.personaje.alive);
    }

}