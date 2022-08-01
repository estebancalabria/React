import AddTodo from "../components/AddTodo";
import { connect } from "react-redux";
import { ACT_ADD_TODO } from "../actions/action-types";

function mapStateToProps(state){
    return {

    }
}

//El dispatch es la funcion que hace llegar una accion al reducer
function mapDispatchToProps(dispatch){


    return {
        onAddTarea : (nueva) =>{
            let accion = {
                type : ACT_ADD_TODO,
                payload : {
                    nombre : nueva,
                    done : false
                }
            };

            dispatch(accion);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);