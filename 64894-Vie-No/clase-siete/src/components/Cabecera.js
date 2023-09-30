import "bootstrap/dist/css/bootstrap.css";

const Cabecera = ({titulo}) => {
    return (<header className="alert alert-info text-center shadow">
        <h1>{titulo}</h1>
    </header>);
}
 
export default Cabecera;
