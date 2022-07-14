import StyleContext from "../context/StyleContext";

const ContextConsumer = () => {
    return (<StyleContext.Consumer>
        {
            (context) => (
                <div style={{
                    backgroundColor : context.backgroundColor, 
                    fontSize: context.fontSize}}>
            
                    Soy un consumidor del contexto clasico
                </div>
            )
        }
    </StyleContext.Consumer>);
}
 
export default ContextConsumer;