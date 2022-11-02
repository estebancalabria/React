import React, { Component } from 'react';

class AgregarContacto extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (<button className='btn btn-success rounded-circle'
           style={{position:"fixed", 
           top:"85vh", 
           left:"90vw", 
           width:"4em", 
           height:"4em",
           zIndex:100}}>
            +
        </button>);
    }
}
 
export default AgregarContacto;