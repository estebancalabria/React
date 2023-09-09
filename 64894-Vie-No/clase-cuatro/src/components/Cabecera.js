import React, { Component } from 'react';  //snippets imrc
import "bootstrap/dist/css/bootstrap.css";

class Cabecera extends Component {   //snippets cc
    state = {  } 
    render() { 
        let {titulo, subtitulo} = this.props; // props ==> {titulo:"sarasa", subtitulo:"sarasa"}

        return (<header className="alert alert-info text-center">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </header>);
    }
}
 
export default Cabecera;

