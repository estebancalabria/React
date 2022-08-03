import OtroContador from "../components/OtroContador";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    numero: state.value
  };
};

export default connect(mapStateToProps)(OtroContador);
