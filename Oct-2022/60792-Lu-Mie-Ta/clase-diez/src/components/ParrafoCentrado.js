import "bootstrap/dist/css/bootstrap.css";
import StyleContext from "../context/StyleContext";

//Cuando tenemos un componente cuyo children es una fincion
//estamos antes el patron "renderprops" o una variacion del mismo

const ParrafoCentrado = ({ texto }) => {
    return (<StyleContext.Consumer>
        {
            (context) => {
                return <p className="text-center" style={context}>
                    {texto}
                </p>
            }
        }
    </StyleContext.Consumer>)
}

export default ParrafoCentrado;