import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import * as Bs from "react-bootstrap";

const InputConBoton = ({ placeholder, textoBoton, onAccion }) => {

    const [value, setValue] = useState("");

    return (<Bs.InputGroup>
        <Bs.FormControl placeholder={placeholder}
            value={value}
            onChange={(evt) => { setValue(evt.target.value) }} />

        <Bs.Button className="btn-outline-primary"
            onClick={() => {
                value && onAccion(value)
                 setValue("");
            }}>
            {textoBoton}
        </Bs.Button>
    </Bs.InputGroup>);
}

export default InputConBoton;