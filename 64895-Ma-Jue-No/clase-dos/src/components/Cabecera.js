import "bootstrap/dist/css/bootstrap.css";

function Cabecera(props) {
    //alert(JSON.stringify(props))

    return (<header className="alert alert-info text-center">
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
    </header>)
}

export default Cabecera;