import "bootstrap/dist/css/bootstrap.css";

const Cabecera = (props) => {
    return (<header className="text-center">
        <h1 className="display-1">{props.titulo}</h1>
        <hr/>
    </header>);
}
 
export default Cabecera;