import "bootstrap/dist/css/bootstrap.css";

const Cabecera = ({titulo, subtitulo}) => {  //snippet sfc
    return (<header className="alert alert-info text-center">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
    </header>);
}
 
export default Cabecera;