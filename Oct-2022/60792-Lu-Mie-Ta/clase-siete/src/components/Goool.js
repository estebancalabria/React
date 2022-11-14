import "bootstrap/dist/css/bootstrap.css";

const Goool = ({ onGol }) => {

    return (<div className="text-center" 
        style={{fontSize:"50px", 
        cursor:"pointer"}}
            onClick={
                (evt)=>{onGol();}
            }>
            &#9917; &#65039;
    </div>);
}

export default Goool;