import "bootstrap/dist/css/bootstrap.css";

/*function Footer(props){
    return (<footer className="bg-dark text-light p-2 text-end fixed-bottom">
        {props.texto}
    </footer>)
}*/

function Footer(props){
    const {empresa, disclaimer} = props;

    return (<footer className="bg-dark text-light p-2 text-end fixed-bottom">
        Copyright {empresa} {new Date().getFullYear()} {disclaimer}
    </footer>)
}

/*function Footer({empresa, disclaimer}){
    return (<footer className="bg-dark text-light p-2 text-end fixed-bottom">
        Copyright {empresa} {new Date().getFullYear()} {disclaimer}
    </footer>)
}*/

export default Footer;