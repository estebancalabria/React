import {takeEvery, delay, put} from "redux-saga/effects";
import Actions from "../actions/actions";

function* interceptGainXP(act){
    yield delay(1000);
}

export default function* sagaMiddlewareMain(){
    yield takeEvery(Actions.GAIN_XP, interceptGainXP);
}