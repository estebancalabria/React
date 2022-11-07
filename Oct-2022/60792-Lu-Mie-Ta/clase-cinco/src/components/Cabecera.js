import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

const URL = "https://baconipsum.com/api/?type=meat-and-filler";

class Cabecera extends Component {
    constructor(props) {
        super(props);
    }
    state = { frase : "Cargando Texto..." }

    componentDidMount(){
        axios.get(URL).then((resp)=>{
            let texto = resp.data[0].substring(0,40);
            this.setState({frase:texto});
        })
    }

    render() { 
        return (<header className="bg-dark text-light p-2">
            <h3 className="display-3">
                {this.state.frase}
            </h3>
        </header>);
    }
}
 
export default Cabecera;