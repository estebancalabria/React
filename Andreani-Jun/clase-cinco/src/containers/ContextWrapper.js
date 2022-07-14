import PropsConsumer from "../components/PropsConsumer";
import StyleContext from '../context/StyleContext';

const ContextWrapper = () => {
    return (
        //Convierte el contexto en unas props para que el componente
        //ni se entere que trabaja con context Api...
        <StyleContext.Consumer>
        {
            (context) => (
                <PropsConsumer style={context} />
            )
        }
    </StyleContext.Consumer>
    );
}
 
export default ContextWrapper;