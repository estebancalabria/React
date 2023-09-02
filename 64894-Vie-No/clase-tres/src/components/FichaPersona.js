
import React from "react";
import PropTypes from "prop-types"

class FichaPersona extends React.Component {
    render() {
        return (<div className="border mt-3 p-2 text-center">
            <h4>Ficha Persona</h4>
            <div>
                <img src={this.props.imagen}
                    style={{ width: "250px", height: "250px" }}
                    alt="Imagen Persona" />
            </div>
            <h5>Nombre: {this.props.nombre}</h5>
            <h5>Apellido:{this.props.apellido}</h5>
            <h5>Edad:{this.props.edad}</h5>
        </div>)
    }
}

//Atencion p minuscula
FichaPersona.propTypes = {
    nombre : PropTypes.string.isRequired,
    apellido : PropTypes.string.isRequired,
    edad :  PropTypes.number.isRequired,
    imagen : PropTypes.string.isRequired
}

//"https://thispersondoesnotexist.com/"
export default FichaPersona;