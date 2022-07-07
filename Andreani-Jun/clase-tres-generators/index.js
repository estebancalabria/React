
console.log("Introduccion a Generators");

function* generatorFn(){
    let a = 1;
    console.log("Primera Vez");
    yield a; //El yeld es analogo al return
    
    a++;
    console.log("Otra vez por aqui...?")
    yield a;

    a++
    console.log("Bueno ya nos estamos conociendo por tercera vez...")
    yield a;

    a++
    console.log("Ya somos habitue, por cuarta vez hola");
    yield a;
}

var fn = generatorFn(); //Tengo un puntero a una instancia de la funcion
console.log(fn);
console.log("Ejecuto mi funcion generadora...")
console.log(fn.next());
console.log("Ejecuto la funcion otra vez...")
console.log(fn.next().value);
console.log("Otra vez mas..(3)");
let res = fn.next();
if (!res.done) { console.log(res.value); }

console.log("Otra vez mas..(4)");
res = fn.next();
!res.done && console.log(res.value); 

console.log("Va una quita vez");
console.log(fn.next());

console.log("Ahora con un for");
var fn2 = generatorFn();
for (let i of fn2){
    console.log(i);
}
