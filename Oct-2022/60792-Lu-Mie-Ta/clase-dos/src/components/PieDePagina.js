import { Component } from "react";
import "./PieDePagina.css"
import Cientifico from "../assets/loco.png";

class PieDePagina extends Component {
    render() {
        return (<div
            className="sticky-bottom"
            style={{
                backgroundColor: "#005153",
                color: "white",
                padding: "1em",
                textAlign: "end"
            }}>
            <img src={Cientifico} style={{width:"70px", height:"70px", float:"left"}} />
            {this.props.contenido}
        </div>);
    }
}

export default PieDePagina;