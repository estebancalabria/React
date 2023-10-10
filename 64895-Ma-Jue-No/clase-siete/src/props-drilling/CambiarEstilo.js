
const estiloClaro = {
    backgroundColor: "lightGrey"
}

const estiloOscuro = {
    backgroundColor: "black",
    color: "white"
}

const CambiarEstilo = ({estilos, onCambiarEstilo}) => {
    
    return (<div style={estilos}>
        <input type="checkbox" onChange={(evt) => {
            evt.target.checked ? onCambiarEstilo(estiloOscuro) : onCambiarEstilo(estiloClaro);
        }} /> Estilo Oscuro
    </div>);
}

export const estiloDefecto = estiloClaro;

export default CambiarEstilo;