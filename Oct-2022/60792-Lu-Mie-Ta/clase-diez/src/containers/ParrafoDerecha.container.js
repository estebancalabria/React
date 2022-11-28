import ParrafoDerecha from "../components/ParrafoDerecha";
import StyleContext from "../context/StyleContext";

function ParrafoDerechaContainer(props) {
    return (<StyleContext.Consumer>
        {
            (context) => (
                <ParrafoDerecha {...props} style={context}>
                    {props.children}
                </ParrafoDerecha>
            )
        }
    </StyleContext.Consumer>);
}

export default ParrafoDerechaContainer;