import { Component } from "react";

class Navegacion extends Component {

    //Aca esta como un atributo de la clase
    /*opciones = [
        <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>,
        <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>,
        <li className="nav-item"><a className="nav-link" href="#">Contactos</a></li>
    ]*/
    //opciones = ["Inicio", "Ofertas", "Contactos"];

    //Puden tener constructor
    /*constructor(props) {
        super(props);
    }*/

    render() {
        //como una variable
        /*let opciones = [
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>,
            <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>,
            <li className="nav-item"><a className="nav-link" href="#">Contactos</a></li>
        ]*/

        return (<nav className="bg-dark">
            <ul className="nav justify-content-center">
                {/*<li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contactos</a></li>*/}
                {/*opciones*/}
                {/*this.opciones.map( (elem)=>(<li className="nav-item"><a className="nav-link" href="#">{elem}</a></li>) )*/}
                {/*this.opciones.map( (elem)=>{return <li className="nav-item"><a className="nav-link" href="#">{elem}</a></li>} )*/}
                {this.props.opciones.map( (elem)=>{return <li className="nav-item"><a className="nav-link" href="#">{elem}</a></li>} )}
            </ul>
        </nav>)
    }
}

export default Navegacion;