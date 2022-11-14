import "bootstrap/dist/css/bootstrap.css";
import Flip from 'react-reveal/Flip';

const Contador = ({titulo, cantidad}) => {
    return (<div className="text-center text-light">
        <h3>{titulo}</h3>
        <Flip left spy={cantidad}>
            <h4 style={{width:"20em", margin:"auto"}}>
                {cantidad}
                </h4>
        </Flip>
    </div>);
}
 
export default Contador;