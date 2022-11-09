import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fade } from "react-reveal";

const Nosotros = (props) => {

    const [equipo, setEquipo] = useState([]);
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
            setEquipo(resp.data.results);
        })
    }, []);

    return (<>
        <h1 className="text-center">
            Nuestro Equipo
        </h1>
        <div className="d-flex flex-wrap justify-content-evenly">
            {
                equipo.map((p) => {
                    return (
                        <Fade top>
                            <div key={p.id}>
                                <img src={p.image} alt={p.name} />
                                <h4>{p.name}</h4>
                            </div>
                        </Fade>)
                })
            }
        </div>
    </>);
}

export default Nosotros;