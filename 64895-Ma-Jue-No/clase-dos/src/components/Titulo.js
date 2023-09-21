import {Component} from "react";

//class Titulo extends React.Component {
class Titulo extends Component {
    render(){
        return (<h3 className="text-success">
            {this.props.texto}
        </h3>)
    }
}

export default Titulo;