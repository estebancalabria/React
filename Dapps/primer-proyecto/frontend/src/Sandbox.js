
/*class Persona{
    public nombre;
}*/

function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
var p = new Persona("Horacio", "Lampe");
alert(p.nombre);
alert(typeof p); //<< Function

//hoy

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
var pepe = new Persona("ds","sds");
alert(typeof pepe); //<<< Function

//funcion convencion
function hacerAlgo(){

}