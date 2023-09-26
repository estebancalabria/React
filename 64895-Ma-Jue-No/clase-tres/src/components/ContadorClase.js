import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class ContadorClase extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador : 0
        }
    }

    incrementar(){
        this.setState({ contador: this.state.contador+1});
    }

    decrementar(){
        if (this.state.contador>0){
            this.setState({ contador: this.state.contador-1});
        }
    }

    reset(){
        //alert(this);
        this.setState({ contador: 0});
    }

    render(){
        return (<div className="text-center border p-3 shadow m-2">
            <h3>Contador de Clase {this.state.contador}</h3>
            <div>
                <button className="btn btn-success me-2" onClick={this.decrementar.bind(this)}>
                    -
                </button>
                <button className="btn btn-danger" onClick={this.reset.bind(this)}>
                    Reset
                </button>
                <button className="btn btn-success ms-2" onClick={this.incrementar.bind(this)}>
                    +
                </button>
            </div>
        </div>);
    }
}

export default ContadorClase;