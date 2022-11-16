import "bootstrap/dist/css/bootstrap.css";

const Contador = ({valor}) => {
    return (<div className="text-center">
        <h1>Contador</h1>
        <h2>{valor}</h2>
    </div>);
}
 
export default Contador;
