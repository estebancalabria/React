require("dotenv").config();
const express = require("express");
const cors = require("cors");

if (!process.env.PORT) {throw Error("Missing Argument PORT in .env")}

const PORT = process.env.PORT;

const app = express();
app.use(cors());

//TODO: Proximamente sale de una base de mongo
let tareas  = [
    {id:1, nombre:"Hacer el marketplace", done:false},
    {id:2, nombre:"Grafico vectorial con SVG", done:false},
    {id:3, nombre:"Testing de la aplicacion con mocha", done:false}
];

app.get("/tarea", (req,res)=>{
   res.send(tareas);
});

app.post("/tarea", (req,res)=>{
    console.log("Voy a agregar una tarea al backend");
    res.send("OK");
})
//Es lo mismo...
/*app.get("/tarea", function(req,res){
    res.send(tareas);
});*/


//express se le podria haber ocurrio app.get("/").then(()=>{...})  promise Style...
app.get("/leyendas", (req,res)=>{
    console.log("GET /Leyendas");

    const sleep = new Promise( (accept, reject)=>{
        console.log("Promise Started");
        setTimeout(()=>{
            console.log("Promise Acepted");
            accept();
        }, 
        1000);
    }).then( ()=>{
            res.send({
                titulo : "Bienvenidos a Mi App",
                subtitulo : "Ejemplo de App Nodejs"
            })
        }   
    );

    /*setTimeout(()=>{
        res.send({
            titulo : "Bienvenidos a Mi App",
            subtitulo : "Ejemplo de App Nodejs"
        });
    },1000);*/
});

app.listen(PORT, ()=>{
   console.log(`Escuchando en el puerto ${PORT}.`);
});

/*app.listen(PORT, function(){
    console.log(`Escuchando en el puerto ${PORT}.`);
});*/