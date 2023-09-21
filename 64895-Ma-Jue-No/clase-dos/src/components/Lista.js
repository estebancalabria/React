import "bootstrap/dist/css/bootstrap.css";

/* function Lista(){
    ...
} */

const Lista = ({items}) =>{

    /*let caracteristicas = [
        <li key={1} className="list-group-item active">React es</li>,
        <li key={2} className="list-group-item">Dinamico</li>,
        <li key={3} className="list-group-item">Facil</li>,
        <li key={4} className="list-group-item">Amigable</li>,
        <li key={5} className="list-group-item">Requiere practica</li>,
        <li key={6} className="list-group-item">Es muy divertido</li>
    ];*/
    //let items = ["Dinamico", "Facil", "Amigable", "Requiere Practica","Es Divertido"]; 

    //Si se fijan en alert la variable caracteristicas es un JSON
    //JSX te permite escribir json en formato xml
    //alert(JSON.stringify(caracteristicas));

    return (
        <ul className="list-group">
            {items.map((item)=>{return <li key={item} className="list-group-item">{item}</li>})}
        </ul>
    )
}

export default Lista;