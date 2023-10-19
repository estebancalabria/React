import "bootstrap/dist/css/bootstrap.css";

//const LeyendaContador = ({valor, children}) => {
const Contador = ({valor,...restOfProps}) => {
    return (<div className="alert alert-info text-center">
        <h3>Contador</h3>
        <h4>{valor}</h4>
        <div>
            {restOfProps.children}
        </div>
    </div>);
}
 
export default Contador;