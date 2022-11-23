import AgregarTarea from "../components/AgregarTarea";
import { connect } from "react-redux";
import { ACT_ADD_TASK } from "../actions/action-types";

function mapStateToProps(state){
  return {
    count : state.tareas.length
  }
}

function mapDispatchToProps(dispatch){
    return {
        onAdd : (tarea)=>{
            let accion = {
                type : ACT_ADD_TASK,
                nombre : tarea
            }
            dispatch(accion);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AgregarTarea);