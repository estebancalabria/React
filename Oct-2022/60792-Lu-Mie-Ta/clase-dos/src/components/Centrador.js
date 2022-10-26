import "bootstrap/dist/css/bootstrap.css";

//export default ({children}})=>(
const Centrador = (props)=>(
    <div className="w-50 mx-auto mt-3">
        {props.children}
    </div>
);

export default Centrador