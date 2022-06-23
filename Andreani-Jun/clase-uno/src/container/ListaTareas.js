import ListaTareas from "../components/ListaTareas";
import { connect } from "react-redux";
import { eliminarTarea } from "../actions/action-creators";
//container = componente+redux

function mapStateToProps(state){
    return {
        tareas : state
    }
}

function mapDispatchToProps(dispatch){
    return {
        eliminarTarea : (id) =>{
            var action = eliminarTarea(id);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaTareas)
