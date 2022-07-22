import "bootstrap/dist/css/bootstrap.css"

const Cabecera = (props) =>{
    return (<header className="alert alert-primary text-center mb-0">
        <h1 className="display-1">{props.titulo}</h1>
    </header>);
}

export default Cabecera;