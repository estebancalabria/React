import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { crearAccionInitPersonajes } from "../redux/simpsons-redux";

const FetchListaPersonajes = () => { 
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get("https://apisimpsons.fly.dev/api/personajes").then((resp)=>{
            let accion = crearAccionInitPersonajes(resp.data.docs);
            dispatch(accion);
        })
    },[]);
    return (<></>);
}
 
export default FetchListaPersonajes;