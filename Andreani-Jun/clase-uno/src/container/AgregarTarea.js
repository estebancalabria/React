import AgregarTarea from "../components/AgregarTarea";
import { connect } from "react-redux";
import { agregarTarea } from "../actions/action-creators";

function mapStateToProps(state){
   return {
    totalTareas : state.length
   }
}

function mapDispatchToProps(dispatch){
   return{
      addTarea : (nombre) =>{
         let accion = agregarTarea(nombre);
         dispatch(accion);
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(AgregarTarea);