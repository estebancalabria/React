
//las variables con let (y const) son  blocked scoped
//las variables con var son function scoped
function ejemplo(){
    while (condicion){
        var varG = 12;
        let varL = 32;
    }
    varG = 32;  //La variable existe fuera del while
    var varG = "Hola";
    varL = 23; //La variable no existe fuera del while
}

//El var te permite redefinir variables
var a = 12;
var a = "Hola";
//con el let y const no se puede refefinir variables
let aa = 12;
//let aa = "Hola"; //Es un error!

//El var hace hoisting (como si hiciera la declaracion al principio)
console.log(a); 
var a;
let a; //Va a dar un error