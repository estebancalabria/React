import "bootstrap/dist/css/bootstrap.css";

const Centrador = ({children}) => {
    return (<div className="w-50 mx-auto">
        {children}
    </div>);
}
 
export default Centrador;