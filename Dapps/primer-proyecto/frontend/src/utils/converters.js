
function convertTareaToLi(tarea){
    return <li key={tarea.id} className="list-group-item">
        {tarea.nombre}
    </li>
};