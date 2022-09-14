import { useState } from "react";
import { Flip, Zoom } from "react-reveal";

const Contador = () => {
    const [count, setCount] = useState(0);

    return (<Zoom>
        <div style={{ textAlign: "center" }}>
            <h1>Contador : </h1>
            <h2><Flip spy={count}>{count}</Flip></h2>
            <div>
                <button type="button" onClick={() => { setCount(count + 1) }}>+</button>
                <button type="button" onClick={() => { setCount(count - 1) }}>-</button>
            </div>
        </div>
    </Zoom>);
}

export default Contador;