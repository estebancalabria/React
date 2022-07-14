import React, { Component } from 'react';
import StyleContext from '../context/StyleContext';

class ClassContextConsumer extends Component {
    render() { 
        return (<div style={{
            backgroundColor : this.context.backgroundColor, 
            fontSize: this.context.fontSize}}>
    
            Soy un consumidor del contexto en un class component
        </div>);
    }
}

ClassContextConsumer.contextType = StyleContext;
 
export default ClassContextConsumer;