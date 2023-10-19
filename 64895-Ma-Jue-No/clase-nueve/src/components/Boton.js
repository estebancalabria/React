import "bootstrap/dist/css/bootstrap.css";

const Boton = ({texto, onAccion}) => {
    return (<button className="btn btn-primary m-1" onClick={()=>{onAccion()}}>
        {texto}
    </button>);
}
 
export default Boton;