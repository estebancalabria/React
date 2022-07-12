
//Estas acciones son las que captura el reducer y me manda SAGA
 const Actions = {
    GAIN_XP : "GAIN_XP",
    TAKE_DAMAGE : "TAKE_DAMAGE", 
    INIT_HEROE : "INIT_HEROE"
}

export default Actions;

/*const RequestActions = {
    REQUEST_GAIN_XP : "GAIN_XP",
    REQUEST_TAKE_DAMAGE : "TAKE_DAMAGE" 
}
*/


//Estas acciones son las que lanza los componentes y llegan a SAGA

//SAGA
//REQUEST_ACCION  a ACCION 

//A SAGA LLEGa
//REQUEST_ACCION = "REQUEST_ACCION"
//Al REDUCER LLEGA
//ACCION = "ACCION"
