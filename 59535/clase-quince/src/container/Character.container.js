import Character from "../components/Character";
import { useDispatch, useSelector } from "react-redux";
import { ACT_REQUEST_ATACAR, ACT_REQUEST_DAMAGE } from "../actions/action-types";

export default (props)=>{
    const char = useSelector( state=> state.personaje);
    const dispatch = useDispatch();

    return <Character {...props} {...char} 
      onAtacar={()=>{
          let accion = {
            type  : ACT_REQUEST_ATACAR
          };
          dispatch(accion);
      }}
      
      onDamage={()=>{
        let accion = {
          type : ACT_REQUEST_DAMAGE
        }
        dispatch(accion);
      }}

      />
}