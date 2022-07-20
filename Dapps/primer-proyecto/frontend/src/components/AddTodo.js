import "bootstrap/dist/css/bootstrap.css";
import React,{ Component } from "react";


class AddTodo extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombreTarea : ''
        }
        //Seria analogo al useState de los componentes funcionales
    }

    componentDidMount(){
        //Aca se harian llamadas asincronicas
        //En los funcionales el lo que va en el useEffect()
    }

    render(){
        return (<div className="input-group">
            {this.state.nombreTarea}
            
            <input className="form-control" type="text" 
                   placeholder="Ingrese nueva tarea"
                   onChange={(evt)=>{ 
                      this.setState({nombreTarea : evt.target.value})
                   }} />

            <button className="btn btn-outline-success" onClick={()=>{
                alert("Click Boton");
            }}>
                +
            </button>
        </div>)
    }
}

export default AddTodo;