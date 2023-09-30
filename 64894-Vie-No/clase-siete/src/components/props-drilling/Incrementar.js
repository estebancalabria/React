import "bootstrap/dist/css/bootstrap.css";

const Incrementar = ({valor, onModificarContador}) => {
    return (<button className="btn btn-primary" 
        onClick={()=>{onModificarContador(valor+1)}}>
        + {valor}
    </button>);
}
 
export default Incrementar;