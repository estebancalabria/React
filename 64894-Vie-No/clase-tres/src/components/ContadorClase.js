import { Component } from "react";

class ContadorClase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }

    incrementar() {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    decrementar() {
        if (this.state.contador > 0) {
            this.setState({
                contador: this.state.contador - 1
            })
        }
    }

    reset() {
        this.setState({
            contador: 0
        })
    }


    render() {
        return (<div className="text-center border mt-3 p-2">
            <h4>Componente Contador de Clases</h4>
            <h3>{this.state.contador}</h3>
            <div>
                <button className="btn btn-primary m-1" onClick={this.decrementar.bind(this)}>
                    -
                </button>
                <button className="btn btn-danger m-1" onClick={this.reset.bind(this)}>
                    Reset
                </button>
                <button className="btn btn-primary m-1" onClick={this.incrementar.bind(this)}>
                    +
                </button>
            </div>
        </div>)
    }
}

export default ContadorClase;