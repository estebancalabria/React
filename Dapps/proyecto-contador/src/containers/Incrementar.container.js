import { connect } from "react-redux";
import { ACT_INCREMENTAR } from "../action/action-types";
import Incrementar from "../components/Incrementar";

function mapStateToProps(state) {
  return {
    valor: state.value
  };
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementar : () =>{
            let accion = { type : ACT_INCREMENTAR};
            dispatch(accion);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Incrementar);
