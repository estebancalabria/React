import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Cabecera extends React.Component {

    render() {
        let { titulo } = this.props;

        return <header className="alert alert-success">
            <h1 className="text-center display-1">
                {titulo}
            </h1>
        </header>
    }
}

export default Cabecera;