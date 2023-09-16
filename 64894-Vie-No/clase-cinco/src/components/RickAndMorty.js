import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Carta from "./Carta";

function RickAndMorty() {

    const [personajes, setPersonajes] = useState([]);

    /*useEffect(() => {
        //Aqui voy a hacer las llamadas asincronicas (Promesa)
        axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
            setPersonajes(resp.data.results);
        })
    }, []);*/

    useEffect(() => {
        async function asyncFunction() {
            //Aqui voy a hacer las llamadas asincronicas (Promesa)
            let resp = await axios.get("https://rickandmortyapi.com/api/character");
            setPersonajes(resp.data.results);
        }
        asyncFunction();
    }, []);


    return (<>
        <h3 className="text-center bg-success text-light">Rick and Morty Api</h3>
        <div className="row">
            {
                personajes.map((personaje) => (<div key={personaje.id} className="col-3 mb-3">
                    <Carta titulo={personaje.name}
                        imagen={personaje.image}
                        descripcion={personaje.species}
                        datosAdicionales={personaje.status} />

                    {/*<div className="card w-100 h-100 shadow">
                        <img className="card-imd-top" src={personaje.image} alt={personaje.name} />
                        <div className="card-body">
                            <h3 className="card-title text-center">{personaje.name}</h3>
                            <div className="card-test text-center">
                                <h4>{personaje.species}</h4>
                                <h5>{personaje.status}</h5>
                            </div>
                        </div>
                        </div>*/}
                </div>))
            }
        </div>
    </>);
}



export default RickAndMorty;
