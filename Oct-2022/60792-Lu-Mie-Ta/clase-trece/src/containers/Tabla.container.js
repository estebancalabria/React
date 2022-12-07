import { connect } from "react-redux";
import Tabla from "../components/Tabla";

function mapStateToProps(state){
    return {
        items : state.alumnos
    }
}

export default connect(mapStateToProps)(Tabla);