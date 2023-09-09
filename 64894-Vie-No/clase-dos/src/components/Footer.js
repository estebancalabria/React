import "bootstrap/dist/css/bootstrap.css";

/*
function Footer(props){
    return (<footer className="text-end bg-secondary p-3">
        <h5>CopyRight {props.empresa}&copy;{props.año}</h5>
        <h5>{props.mensaje}</h5>
    </footer>)
}
*/

function Footer(props){
    const {empresa, año, mensaje} = props;
    return (<footer className="text-end bg-secondary p-3">
        <h5>CopyRight {empresa}&copy;{año}</h5>
        <h5>{mensaje}</h5>
    </footer>)
}

/*function Footer({empresa, año, mensaje}){
    return (<footer className="text-end bg-secondary p-3">
        <h5>CopyRight {empresa}&copy;{año}</h5>
        <h5>{mensaje}</h5>
    </footer>)
}*/

export default Footer;