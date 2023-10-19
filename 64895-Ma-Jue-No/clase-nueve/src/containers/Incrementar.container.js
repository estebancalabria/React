import { useDispatch } from "react-redux";
import Boton from "../components/Boton";
import * as types from "../actions/action-types"

const Incrementar = () => {

    //El dispatch hace que se ejecute el reducer
    //el reducer modifica el estado
    const dispatch = useDispatch();

    //El onAccion tiene que hacer llegar la accion al redcuer
    return (<Boton texto="+" onAccion={()=>{
        dispatch({type : types.ACT_INCREMENTAR})
    }} />);
}
 
export default Incrementar;