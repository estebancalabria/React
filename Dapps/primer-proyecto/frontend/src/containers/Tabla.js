import Tabla from "../components/Tabla";
//import Tabla from "../containers/BlueTable";
import { connect } from "react-redux";

function mapStateToProps(state){
  return {
    items: state.tareas
  }
}

export default connect(mapStateToProps)(Tabla);