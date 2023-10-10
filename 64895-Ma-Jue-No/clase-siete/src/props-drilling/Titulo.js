
//Reconozco dos tipos de props
//1. La props texto necesaria para funcionamiento especifico del componente
//2. La props estilos que es mas general de toda la aplicacion
const Titulo = ({texto, estilos}) => {
    return (<h1 style={{...estilos, margin:"0px", padding:"1em"}}>
        {texto}
    </h1>);
}
 
export default Titulo;