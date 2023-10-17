import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";

const TotalProductosRedux = ({total}) => {
    return (<h4 className="text-center">
        El total de productos es {total}
    </h4>);
}

function mapStateToProps(store){
    return {
        total : store.productos.length
    }
}
 
//container = componente + connect 
export default connect(mapStateToProps)(TotalProductosRedux);