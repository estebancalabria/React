const Parrafo = ({texto, estilos}) => {
    return (<p style={{...estilos, margin:"0px", padding:"1em"}}>
        {texto}
    </p>);
}
 
export default Parrafo;