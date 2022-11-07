import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const URL = "https://rickandmortyapi.com/api/character?page=";

const ListaDePersonajes = (props) => {

    const [personajes, setPersonajes] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios.get(URL + paginaActual).then((resp) => {
                setPersonajes(resp.data.results);
                setLoading(false);
            }).catch((err)=>{
                Swal.fire("Error", err.message, "error");
            });
        }, 2000)
    }, [paginaActual]);

    return (<>
        <h1>Lista de Personajes</h1>
        <div className="mb-3 d-flex justify-content-between">
            <button className="btn btn-primary"
                onClick={() => { setPaginaActual(paginaActual - 1) }}
                disabled={paginaActual == 1}>
                Anterior
            </button>
            <h3>Pagina Actual : {paginaActual}</h3>
            <button className="btn btn-primary"
                onClick={() => { setPaginaActual(paginaActual + 1) }}
                disabled={paginaActual == 42}>
                Siguiente
            </button>
        </div>
        <div className="row">
            {
                (loading) && <div class="text-center">
                    <img src="Loading.gif" style={{width:"30%", height:"auto"}} /> 
                    <div className="text-primary">
                        Cargando...
                    </div>
                </div>
            }
            {
                (!loading) && personajes.map((personaje) => (
                    <div className="col-3 mb-3 ">
                        <div className="card h-100" key={personaje.id}>
                            <img className="card-img-top" src={personaje.image} />
                            <h3 className="card-header">{personaje.name}</h3>
                            <div className="card-body">
                                <p className="card-text">{personaje.status}</p>
                                <p className="card-text">{personaje.gender} {personaje.species}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}

export default ListaDePersonajes;