import { useState } from "react";
import StyleContext, { estiloDefecto } from "./StyleContext";
import TituloConContextApi from "./TituloConContextApi";
import CambiarEstiloConContextApi from "./CambiarEstiloConContextApi";


const ContextApiDemo = () => {

    const [estilos, setEstilos] = useState(estiloDefecto);

    return (<StyleContext.Provider
        value={{
            estilos: estilos,
            onCambiarEstilo: (estilo) => { setEstilos(estilo) }
        }}>
        <CambiarEstiloConContextApi />
        <TituloConContextApi texto="Demo Context Api" />
    </StyleContext.Provider>);
}

export default ContextApiDemo;