import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

class Cabecera extends Component {
    //props;
    //atributos
    //nombre;

    render(){
        //this.nombre = "Pepe"; //seteo un atributo

        return (<header className="alert alert-primary text-center">
            <h1 className="display-1">&#10084;&#65039; {this.props.titulo} &#10084;&#65039;</h1>
            <h2 className="display-2">{this.props.subtitulo}</h2>
        </header>)
    }
}

export default Cabecera;