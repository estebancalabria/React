import ListaJugadores from "../components/ListaJugadores";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {
        jugadores : state.jugadores
    }
}

export default connect(mapStateToProps)(ListaJugadores);