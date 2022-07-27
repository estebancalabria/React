import { connect } from "react-redux";
import TodoList from "../components/TodoList";

function mapStateToProps(state){
    return {
       tareas : state.tareas
    }
}

//esto es lo que se conoce como un highOrderComponent
export default connect(mapStateToProps)(TodoList);