import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";

type CabeceraProps = {
    titulo : String,
    subtitulo? : String
}

const Cabecera = (props:CabeceraProps) => {
    return (<Bs.Alert variant="primary" className="text-center">
        <h1>
            {props.titulo}
        </h1>
        {
            props.subtitulo && <h2>
                {props.subtitulo}
            </h2>
        }
    </Bs.Alert>);
}
 
export default Cabecera;