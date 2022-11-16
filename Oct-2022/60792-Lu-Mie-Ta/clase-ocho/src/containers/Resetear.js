import "bootstrap/dist/css/bootstrap.css";

const Resetear = ({onAccion, valor}) => {
    return (<button className="btn btn-success" onClick={onAccion}
                    style={{fontSize: 10 + valor}}>
        Resetear
    </button>);
}
 
export default Resetear;