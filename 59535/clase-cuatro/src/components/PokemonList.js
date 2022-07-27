import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon";

export default function PokemonList(props) {

    const [pokedex, setPokedex] = useState([]);

    //Agenda una funcion para que se ejecute una vez que el componente se renderiza
    useEffect(() => {
        //Este codigo se ejecuta cuando el componente se ha montado
        //Al hacerlo asi se que el componente ya hizo render y se esta mostrando
        axios.get(URL).then((resp) => {
            setPokedex(resp.data.results);
        })
    }, []);

    return (<table className="table">
        <thead>
            <tr>
                <th>Nombre</th>
            </tr>
        </thead>
        <tbody>
            {
                pokedex.map((pokemon) => (
                    <tr key={pokemon.name}>
                        <td>{pokemon.name}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>)
}