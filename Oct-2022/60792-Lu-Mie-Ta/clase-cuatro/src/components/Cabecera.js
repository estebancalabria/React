//escribo imrc
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

//Escribo cc
class Cabecera extends Component {
    state = {  } 

    constructor(props){
        super(props);
        this.state = { titulo : this.props.titulo }
    }

    componentDidMount(){
        let caracteres = 1;

        setInterval(()=>{
            this.setState({
                    titulo : this.props.titulo.substring(0,caracteres)
                });    
            caracteres = (caracteres + 1) % this.props.titulo.length;
        },300);
    }

    render() { 
        const {titulo} = this.state;
        
        return (<header className='alert alert-primary text-center'>
            <h1 className="display-1">
                &#128104;
                { this.state.titulo }
            </h1>
        </header>);
    }
}
 

export default Cabecera;
