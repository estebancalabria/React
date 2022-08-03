import { connect } from "react-redux";
import { ACT_DECREMENTAR } from "../action/action-types";
import Decrementar from "../components/Decrementar";

function mapStateToProps(state) {
  return {
    valor: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDecrementar: () => {
      let accion = { type: ACT_DECREMENTAR };
      dispatch(accion);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Decrementar);
