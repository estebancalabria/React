import "bootstrap/dist/css/bootstrap.css";

function Cabecera({titulo}){
    return <header className="alert alert-info text-center">
        <h1>{titulo}</h1>
    </header>
}

export default Cabecera;