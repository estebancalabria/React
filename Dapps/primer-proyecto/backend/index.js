require("dotenv").config();
var express = require("express");
var cors = require("cors");

if (!process.env.PORT) {throw Error("Missing Argument PORT in .env")}

const PORT = process.env.PORT;

//console.log(express);
//TIP: console.log(express.constructor.name);

var app = express();
app.use(cors());



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