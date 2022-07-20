import "bootstrap/dist/css/bootstrap.css";

//El traspilador de jsx hace esto:
//let v = <div>Hola</div>;  >>> { key: "div", value : "hola"}

/*let tareas = [
   <li className="list-group-item">Tarea1</li>,  
   <li className="list-group-item">Tarea2</li>,
   <li className="list-group-item">Tarea3</li>
];*/

/*let tareas = [
    {id:1, nombre:"Tarea Uno", done:false},
    {id:2, nombre:"Tarea Dos", done:false},
    {id:3, nombre:"Tarea Tres", done:false},
];*/

//Nueva forma de escribir una funcion (Arrow Functions)

/*function convertTareaToLi(tarea){
    return <li key={tarea.id} className="list-group-item">
        {tarea.nombre}
    </li>
}*/

const TodoList = (props) => {
    
    return (<div>
        <ul className="list-group">
            <li className="list-group-item active">Lista de Tareas</li>  
            {
                //? es lo mismo que hacer...
                //if ((props.tareas != null) && (props.tareas != undefined)) {props.tareas.map}
                props.tareas?.map((tarea)=>(   //<<< "?" nullsense operator
                    <li key={tarea.id} className="list-group-item">
                        {tarea.nombre}
                    </li>    
                )) 
                ?? 
                <li className="list-group-item">No hay nada que mostrar</li> 
                // "??" es Nullish coalescing operator

                //Tambien se puede con un operador ternario
                //props.tarea ? props.tareas?.map(..) : <li></li>
                
                //props.tarea.map(convertTareaToLi)
                /*
                tareas.map((tarea)=>{   <<<<<<< "{" en vez de "("
                    return <li key={tarea.id} className="list-group-item">{tarea.nombre}</li>    
                })
                */
            }
        </ul>
    </div>)
}

//Lo mismo que hacer
/*function TodoList(props){
    this.atributo = "valor"; //cuando uno hacia new aparecia el this
}

//Es lo mismo que hacer
class TodoList{
    constructor(props){

    }

    componentWillMount(){

    }
}

//En los tres casos
//var foo = new TodoList({tareas:[{},{},{}]})
*/

export default TodoList;