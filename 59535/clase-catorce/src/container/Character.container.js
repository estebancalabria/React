import Character from "../components/Character";
import { useDispatch, useSelector } from "react-redux";
import { ACT_REQUEST_ATACAR } from "../actions/action-types";

export default (props)=>{
    const char = useSelector( state=> state.personaje);
    const dispatch = useDispatch();

    return <Character {...props} {...char} 
      onAtacar={()=>{
          let accion = {
            type  : ACT_REQUEST_ATACAR,
            payload : 100
          };

          dispatch(accion);
      }}/>
}