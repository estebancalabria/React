import React, { Component } from 'react';

class AgregarContacto extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (<div className='btn btn-lg btn-success shadow-lg rounded-circle mb-3 me-3'
           style={{position:"fixed", 
           bottom:"0", 
           right:"0",
           fontSize:"4em",
           padding:0,
           border:0,
           width:"2em",
           zIndex:100}}>
            <span style={{position:"relative", top:"-5px"}}>+</span>
        </div>);
    }
}
 
export default AgregarContacto;