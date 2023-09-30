import { connect } from "react-redux"
import MostrarContadorPuro from "../components/MostrarContadorPuro"

//mapea el store a las props que necesita el componente
function mapStateToProps(state){
   return {
        valor : state.contador
   }
}

export default connect(mapStateToProps)(MostrarContadorPuro);