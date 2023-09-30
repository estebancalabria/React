import "bootstrap/dist/css/bootstrap.css";

const MostrarContador = ({valor}) => {
    return (<h3 className="text-center">
        Valor Contador : {valor}
    </h3>);
}
 
export default MostrarContador;