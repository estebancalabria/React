import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap"
import Carta from "../components/Carta";
import { useSelector } from "react-redux";

const ListaPersonajesSimpsons = () => {

    const personajes = useSelector(store => store.personajes);

    return (<Bs.Row>
        {
            personajes.map(p => (
                <Bs.Col sm={4} key={p._id}>
                    <Carta
                        imagen={p.Imagen}
                        titulo={p.Nombre}
                        subtitulo={p.Ocupacion}
                        texto={p.Historia}
                        accion="Ver Mas Datos"
                        onAccion={() => { alert("Visite el store de los Simpsons") }} />
                </Bs.Col>
            ))
        }
    </Bs.Row>);
}

export default ListaPersonajesSimpsons;