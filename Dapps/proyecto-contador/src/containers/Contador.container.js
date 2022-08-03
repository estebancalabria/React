import { connect } from "react-redux";
import Contador from "../components/Contador";

function mapStateToProps(state) {
  return {
    valor: state.value
  };
}

export default connect(mapStateToProps)(Contador);
