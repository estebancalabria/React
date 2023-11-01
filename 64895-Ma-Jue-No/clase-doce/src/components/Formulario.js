import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import * as Bs from "react-bootstrap";

const Formulario = ({ campos, onSubmit }) => {

    const [state, setState] = useState({})

    return (<Bs.Form>
        {
            campos.map((campo) => (
                <Bs.FormGroup key={campo}>
                    <Bs.FormLabel>
                        {
                            campo.substring(0, 1).toUpperCase() +
                            campo.substring(1)
                        }
                    </Bs.FormLabel>
                    <Bs.FormControl onChange={(evt) => {
                        let newState = { ...state };
                        newState[campo] = evt.target.value;
                        setState(newState);
                    }} />
                </Bs.FormGroup>
            ))
        }
        <Bs.Button
            variant="primary"
            className="w-100 mt-2 mb-2"
            onClick={() => { onSubmit(state) }}>
            Submit
        </Bs.Button>
    </Bs.Form>);
}

export default Formulario;