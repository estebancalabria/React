import axios from "axios";
import { useEffect, useState } from "react";
import Carta from "./Carta";

const PersonajesSouthPark = () => {

    let [personajes, setPersonajes] = useState([]);
    useEffect(() => {
        (async function(){
            let resp = await axios.get("https://spapi.dev/api/characters");
            setPersonajes(resp.data.data);
        })();
        /*axios.get("https://spapi.dev/api/characters").then((resp) => {
            /*
            resp.data = {
                "data": [
                    {
                    "id": 1,
            */
          /*  setPersonajes(resp.data.data);
        })*/
    }, []);

    return (<div className="row">
        {
            personajes.map((personaje) => (
                <div key={personaje.id} className="col-sm-3">
                    <Carta
                        imagen="https://thispersondoesnotexist.com/"
                        titulo={personaje.name}
                        texto={personaje.sex + "  " +personaje.occupation}
                    />
                </div>
            ))
        }

    </div>);
}

export default PersonajesSouthPark;