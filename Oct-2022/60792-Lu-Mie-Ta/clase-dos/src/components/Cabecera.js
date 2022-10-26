import "bootstrap/dist/css/bootstrap.css";



//Recomendado seria function Cabecera({titulo, subtitulo}){}
function Cabecera(props) {
    return (<header className="alert alert-warning text-center mb-0">
        <h1 className="display-2">
            {props.titulo}
        </h1>
        <h2 className="display-4">
            {props.subtitulo}
        </h2>
    </header>);
}

export default Cabecera;