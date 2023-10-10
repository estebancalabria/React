import { useContext } from "react";
import StyleContext, { estiloClaro, estiloOscuro } from "./StyleContext"; ;

//No recibimos mas {estilos, onCambiarEstilo}
const CambiarEstiloConContextApi = () => {
    
    const context = useContext(StyleContext);

    return (<div style={context.estilos}>
        <input type="checkbox" onChange={(evt) => {
            evt.target.checked ? context.onCambiarEstilo(estiloOscuro) : context.onCambiarEstilo(estiloClaro);
        }} /> Estilo Oscuro
    </div>);
}

//export const estiloDefecto = estiloClaro;

export default CambiarEstiloConContextApi;