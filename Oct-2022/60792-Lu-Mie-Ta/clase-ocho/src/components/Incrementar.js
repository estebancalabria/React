import "bootstrap/dist/css/bootstrap.css";

const Incrementar = ({onAccion}) => {
    return (<button className="btn btn-primary" onClick={onAccion}>
        +
    </button>);
}
 
export default Incrementar;