import "bootstrap/dist/css/bootstrap.css";

function Barra({contenido, oscuro=true}){
    return <div className={(oscuro ? "bg-dark text-light" : "border") + " p-1 text-end"}>
        {contenido}
    </div>
}

export default Barra;