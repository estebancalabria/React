import { useState } from "react";
import { Transition } from "react-transition-group";

const Cabecera = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div style={{ textAlign: "center", padding: "1em", border: "1px solid" }}>
            <Transition in={toggle} timeout={2000}>
                {
                    (estado) => {
                        switch (estado) {
                            case "exited":
                                return <h1>Transicion en estado falso</h1>
                                break;
                            case "entering":
                            case "exiting":
                                return <h2 style={{color:"yellow"}}>Transicion en proceso</h2>
                                break
                            case "entered":
                                return <h1>Transicion en estado true</h1>
                                break;
                        }
                    }
                }
            </Transition>
            <h1>Cabecera</h1>
            <button onClick={() => { setToggle(!toggle) }}>{toggle ? "Si" : "No"}</button>
        </div>);
}

export default Cabecera;