import FormularioJugador from "./FormularioJugador"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AgregarJugador = ()=>{

    const URL_JUGADORES = "http://localhost:3001/jugadores";

    const navigate = useNavigate();

    return <FormularioJugador titulo="Agregar Jugador" onAction={(jugador)=>{
        axios.post(URL_JUGADORES, jugador).then(()=>{
            navigate(-1);
        })
    }} />
}

export default AgregarJugador