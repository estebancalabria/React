import { useDispatch, useSelector } from "react-redux";
import { ACT_REQUEST_ATACAR, ACT_REQUEST_DEFENDER } from "../actions/action-types";
import Heroe from "../components/Heroe";

export default function HeroeContainer(props){

    const heroe = useSelector(state => state.heroe)
    const dispatch = useDispatch();

    return <Heroe nombre={heroe.nombre}
                vida = {heroe.vida}
                nivel = {heroe.nivel}
                xp={heroe.experiencia}
                onDefender={()=>{
                    let accion = {
                        type: ACT_REQUEST_DEFENDER,
                        payload : Math.round(Math.random()*50)
                    }
                    dispatch(accion);
                }}
                onAtacar={()=>{
                    let accion = {
                        type : ACT_REQUEST_ATACAR,
                        payload : Math.round(Math.random()*200)
                    }
                    dispatch(accion);
                }}/>
}