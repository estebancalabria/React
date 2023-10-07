/*import { connect } from "react-redux";
import Cabecera from "../components/Cabecera";

//Opcion 1 : mapStateToProps + connect*/
/*function mapStateToProps(state){
    return ({
        titulo : state.titulo,
        subtitulo : state.subtitulo
    });
}
 
export default connect(mapStateToProps)(Cabecera);*/

//Opcion 2. Con el hook useSelector
import { useState } from "react";
import { useSelector } from "react-redux";
import Cabecera from "../components/Cabecera";

const CabeceraConRedux = (props) => {

    const [titulo, subtitulo] = useSelector((estadoGlobal)=>{
        return [estadoGlobal.titulo, estadoGlobal.subtitulo]
    });
    return (<Cabecera titulo={titulo} subtitulo={subtitulo} />);
}

export default CabeceraConRedux;

