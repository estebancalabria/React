import { useState } from "react";
import Parrafo from "./Parrafo";
import Titulo from "./Titulo";
import CambiarEstilo, {estiloDefecto} from "./CambiarEstilo";

const PropsDrillingDemo = () => {

   /* const estiloClaro = {
        backgroundColor: "lightGrey"
    }

    const estiloOscuro = {
        backgroundColor: "black",
        color: "white"
    }*/

    const [estiloActual, setEstiloActual] = useState(estiloDefecto);

    return (<div>
        {/* Se empieza a repetir lo de la props que las paso para todos lados
        <input type="checkbox" onChange={(evt)=>{
            evt.target.checked ? setEstiloActual(estiloOscuro) : setEstiloActual(estiloClaro);
        }} /> Estilo Oscuro*/}

        {/* Observacion. La variable estilos se repite en todo (codigo duplicado o bolierplate) */}
        <CambiarEstilo estilos={estiloActual} onCambiarEstilo={(estilo)=>{setEstiloActual(estilo)}} />
        <Titulo texto="Demo de Props Drilling" estilos={estiloActual} />
        <Parrafo texto="Una simple demo de como funciona Props Drilling" estilos={estiloActual} />
    </div>);
}

export default PropsDrillingDemo;