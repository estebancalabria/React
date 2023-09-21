import React, { Component } from 'react';
import LabelsContext from '../Context/LabelsContext';
import "bootstrap/dist/css/bootstrap.css";

class Cabecera extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<header cla>

        </header>);
    }
}

Cabecera.contextType = LabelsContext;
 
export default Cabecera;