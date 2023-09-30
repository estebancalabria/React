import "bootstrap/dist/css/bootstrap.css";

//Un componente puro es el que solo usa props!
//No depende de nadie mas
const MostrarContadorPuro = ({valor}) => {
    return (<h3 className="text-center">
        Redux Muestro contador (Componente Puro) 
        <div>{valor}</div>
    </h3>);
}
 
export default MostrarContadorPuro;