import { connect } from "react-redux";
import AccionContadorPuro from "../components/AccionContadorPuro";
import * as actionTypes from "../actions/action-types";

function mapStateToProps(state){
  return {
    valor : state.contador,
    texto : "+"
  }
}

//dispatch es una funcion que recibe una accion y la manda al reducer
//el dispatch ejecuta la funcion del reducer
function mapDispatchToProps(dispatch){
    return {
        onAccion : ()=>{ dispatch({type : actionTypes.ACT_INCREMENTAR}) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccionContadorPuro);