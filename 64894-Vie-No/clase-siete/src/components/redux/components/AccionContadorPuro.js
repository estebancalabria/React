import "bootstrap/dist/css/bootstrap.css";

const AccionContadorPuro = ({valor, texto, onAccion}) => {
    return (<button className="btn btn-primary" onClick={onAccion}>
        {/* lo vimos asi onClick={()=>{onAccion()}}*/}
        {texto} ({valor})
    </button>);
}
 
export default AccionContadorPuro;
