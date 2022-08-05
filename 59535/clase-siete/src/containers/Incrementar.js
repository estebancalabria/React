import Incrementar from "../components/Incrementar";
import { connect } from "react-redux";
import { ACT_SUMAR } from "../actions/action-types";

function mapStateToProps(state){
    return {
        valor : state.value
    }
}

function mapDispatchToProps(dispatch){
   return {
       onIncrementar : () => {
           let accion = {
               type : ACT_SUMAR
           };
           dispatch(accion);
       }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Incrementar);