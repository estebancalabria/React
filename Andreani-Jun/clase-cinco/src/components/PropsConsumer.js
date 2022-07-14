
const PropsConsumer = (props) => {
    return (
        <div style={{
            backgroundColor : props.style.backgroundColor, 
            fontSize: props.style.fontSize}}>
    
            Soy un consumidor del contexto indirectamente por props
        </div>
    );
}
 
export default PropsConsumer;