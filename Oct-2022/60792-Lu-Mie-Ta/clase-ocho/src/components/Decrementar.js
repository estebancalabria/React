import "bootstrap/dist/css/bootstrap.css";

const Decrementar = ({onAccion, valor}) => {
    return (<button className="text-warning btn" onClick={onAccion}
              style={{backgroundColor:`rgb(${valor},0,0)`}}>
        DEC ({valor})
    </button>);
}
 
export default Decrementar; 