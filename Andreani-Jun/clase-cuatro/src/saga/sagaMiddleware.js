import {takeEvery, delay, put, select, call, fork} from "redux-saga/effects";
import Requests from "../actions/action-requests";
import Responses from "../actions/actions";
import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3001/heroes/1";

function* simularJuego(){
    while (true){
        yield put({
            //type : Actions.GAIN_XP,
            type : Responses.GAIN_XP,
            payload : Math.round(Math.random() * 100)
        });

        yield put({
            //type : Actions.TAKE_DAMAGE,
            type : Responses.TAKE_DAMAGE,
            payload : Math.round(Math.random() * 100)
        })

        yield delay(2000);
    }
}

function* interceptGainXP(action){
    //alert("SAGA " + JSON.stringify(action));
    try{
        yield delay(1000);

        action.type = Responses.GAIN_XP;
        yield put(action);
        var heroe = yield select(store=>store);

        const {resp,error} = yield call(axios.put, URL, heroe);
        if (!resp){
            alert("12");
            yield call(Swal.fire.apply, error);
        }
    }catch(error){
        yield call(Swal.fire.apply, error);
    }
}

function* interceptTakeDamage(action){
    yield delay(1000);

    action.type = Responses.TAKE_DAMAGE;
    yield put(action);
    var heroe = yield select(store=>store);

    yield call(axios.put, URL, heroe);
}

export default function* sagaMiddlewareMain(){
    //apenas inicializo saga
    //Inicializo el store con SAGA
    var heroe = yield call(axios.get, URL);
    yield put({type: Responses.INIT_HEROE, payload:heroe.data});

    //simulo el juego en paralelo
    yield fork(simularJuego);
    
    //Atrapo las acciones
    yield takeEvery(Requests.GAIN_XP, interceptGainXP);
    yield takeEvery(Requests.TAKE_DAMAGE, interceptTakeDamage);
}