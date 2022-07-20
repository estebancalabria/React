import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";

let tareasIniciales = [
    { id:1 , nombre:"Viajar por el mundo...", done:false },
    { id:2 , nombre:"Ganarse la loteria...", done:false },
    { id:3 , nombre:"Pagar la obra social..", done:false }
];
 
/*let tareas = [
    <li className="list-group-item">Pedir aumento de sueldo</li>,
    <li className="list-group-item">Comprar bitcoins</li>,
    <li className="list-group-item">Resolver los modulos</li>
]*/

function TodoList(props){
 
    //declarando una variable de estado del componente
    const [tareas, setTareas] = useState(tareasIniciales);
    const [nuevaTarea, setNuevaTarea] = useState("");

    return (<div>
        <ul className="list-group">
            <li className="list-group-item active">Lista de Pendientes</li>
            {
                /*tareas.map((tarea)=>{
                    return <li key={tarea.id} className="list-group-item">
                        {tarea.nombre}
                        </li>
                })*/
                tareas.map((tarea)=>(
                     <li key={tarea.id} className="list-group-item">
                        {tarea.nombre}
                        </li>))
            }
        </ul>
        <div className="input-group">
            <input className="form-control" type="text" placeholder="Nueva Tarea..."
                onChange={(evt)=>{ setNuevaTarea(evt.target.value)}} 
                value={nuevaTarea}/>
                
            <button className="btn btn-outline-primary" onClick={()=>{
                setTareas([
                    ...tareas,
                    {id:tareas.length+1, nombre:nuevaTarea, done : false}
                ]);
                setNuevaTarea("");
            }}>
                +
            </button>
        </div>
   </div>);
}

export default TodoList;



/*
//Antes de ES6
function Persona(nombre, apellido){
    //Definir los atributos de la clase
    this.nombre = nombre;
    this.apellido = apellido;
}
var p = new Persona("Juan","Perez");

//Despue del ES6
class Persona{
    nombre;
    apellido;
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;        
    }
}
var pp = new Persona("Pedro","Ramirez");
*/