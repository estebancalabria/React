import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementarAction } from "../actions/action-creators";
import { ACT_INCREMENT, ACT_DECREMENT } from "../actions/action-types";

//Todo: Me gustaria separar componente y container
export function ReduxCounter() {

    const cont = useSelector(state => state.contador);
    const dispatch = useDispatch();

    return (<div className="text-center">
        Contador Redux : {cont}
        <div>
            <button className="btn btn-primary"
                onClick={() => {
                    //dispatch({ type: ACT_INCREMENT })
                    //Ahora uso thunk
                    dispatch(incrementarAction())
                }}>
                +
            </button>
            <button className="btn btn-danger"
                onClick={() => {
                    dispatch({ type: ACT_DECREMENT })
                }}>
                -
            </button>
        </div>
    </div>)
}