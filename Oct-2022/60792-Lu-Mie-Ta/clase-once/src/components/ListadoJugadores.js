import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListadoJugadores = () => {

    const URL_JUGADORES = "http://localhost:3001/jugadores";

    const [jugadores, setJugadores] = useState([]);
    useEffect(() => {
        axios.get(URL_JUGADORES).then(resp => {
            setJugadores(resp.data);
        })
    }, []);

    return (<>
        <div className="text-end">
            <Link to="/agregar" className="btn btn-primary">Agregar Jugador</Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Camiseta</th>
                    <th>Nombre</th>
                    <th>Posicion</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    jugadores.map((jugador) => {
                        return (<tr>
                            <td className="text-center">{jugador.camiseta}</td>
                            <td>{jugador.nombre}</td>
                            <td>{jugador.posicion}</td>
                            <td>
                                <Link to={`/modificar/${jugador.id}`} 
                                    className="btn btn-success float-end"> 
                                    Modificar
                                </Link>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </>);
}

export default ListadoJugadores;