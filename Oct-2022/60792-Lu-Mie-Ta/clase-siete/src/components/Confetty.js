import party from "party-js";

const Confetty = ({children}) => {
    return (<div onClick={(evt)=>{
        party.confetti(evt.target, {
            count: party.variation.range(200, 400),
        });
    }}>
        {children}
    </div>);
}
 
export default Confetty;