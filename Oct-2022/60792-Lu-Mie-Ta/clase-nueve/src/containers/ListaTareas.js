import { connect } from "react-redux";
import Lista from "../components/Lista";

function mapStateToProps(state){
    return {
        titulo : "Lista de Tareas",
        items : state.tareas
    }
}

export default connect(mapStateToProps)(Lista);