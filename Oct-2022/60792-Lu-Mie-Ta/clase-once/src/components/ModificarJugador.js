import FormularioJugador from "./FormularioJugador"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const ModificarJugador = ()=>{
    const URL_JUGADORES = "http://localhost:3001/jugadores";
    const [jugador, setJugador] = useState();

    const params = useParams();
    useEffect(()=>{
        axios.get(URL_JUGADORES + "/" + params.id).then((resp)=>{
            setJugador(resp.data);
        });
    }, []);

    return (<FormularioJugador titulo="Modificar Jugador" />)
}

export default ModificarJugador