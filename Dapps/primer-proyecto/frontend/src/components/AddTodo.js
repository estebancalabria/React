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
            <input className="form-control" type="text" 
                   placeholder="Ingrese nueva tarea"
                   onChange={(evt)=>{ 
                      this.setState({nombreTarea : evt.target.value})
                   }} />

            <button className="btn btn-outline-success" onClick={()=>{
                this.props.onAddTarea(this.state.nombreTarea)
            }}>
                +
            </button>
        </div>)
    }
}

export default AddTodo;