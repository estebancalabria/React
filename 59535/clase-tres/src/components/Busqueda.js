import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Busqueda(props) {

    const [busqueda, setBusqueda] = useState('');

    return (<div>
        <div className="input-group p-2">
            <input className="form-control" type="text"
                placeholder="Que desea escuchar hoy?"
                onChange={(e) => {
                    setBusqueda(e.target.value);
                }} />
            <button className="btn btn-outline-primary">
                Buscar
            </button>
        </div>
        {
            (busqueda.length > 0)
            && (<div className="text-end text-info">
                Usted quiere escuchar {busqueda}
            </div>)
        }
    </div>)
}

export default Busqueda;