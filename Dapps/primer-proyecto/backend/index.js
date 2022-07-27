require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { query } = require("express");
const bodyParser = require("body-parser")

if (!process.env.PORT) { throw Error("Missing Argument PORT in .env") }

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json())

//logMiddleware
app.use((req, res, next) => {
    console.log("------------------");
    console.log(req.method, req.url);
    console.log("Headers:", req.headers)
    console.log("Query:", req.query);
    console.log("Body:", req.body);
    console.log("------------------");
    next();
});

//TODO: Proximamente sale de una base de mongo
let tareas = [
    { id: 1, nombre: "Hacer el marketplace", done: false },
    { id: 2, nombre: "Grafico vectorial con SVG", done: false },
    { id: 3, nombre: "Testing de la aplicacion con mocha", done: false }
];

app.get("/tarea/:id", (req, res) => {

    if (req.params.id) {
        let id = req.params.id;
        let tareasFiltradas = tareas.filter(tarea => (tarea.id == id));
        if (tareasFiltradas.length > 0) {
            res.send(tareasFiltradas[0]);
        } else {
            res.statusCode = 404;
            res.send({ result: "Error", message: "No hay una tarea con ese id" });
        }
    } else {
        res.statusCode = 500;
        res.send("Param ID Missing");  // ==> return
    }
})

app.get("/tarea", (req, res) => {
    //if (req.headers["user-agent"]?.indexOf("Chrome") > 0){
    if (req.query.id) {
        let id = req.query.id;
        res.send(tareas.filter(tarea => (tarea.id == id)));
    } else {
        res.send(tareas);
    }
    /*}else{
        res.statusCode = 500;
        res.send("Solo funciona en CHROME");
    }*/
});

app.post("/tarea", (req, res) => {
    console.log("Voy a agregar una tarea al backend");

    var tarea = req.body;

    //valido que exista el campo nombre
    if (!tarea.nombre) {
        res.statusCode = 500;
        res.send({ result: "error", message: "falta el nombre" });
        return;
    }

    if (!tarea.done) {
        res.statusCode = 500;
        res.send({ result: "error", message: "falta el done" });
        return;
    }

    //validar que la tarea tiene todos los campos y el formato correcto
    tarea.id = Math.max(...tareas.map(tarea => tarea.id), 0) + 1;

    //Dos formas de agregar un elemento a un array
    tareas.push(tarea);
    //tareas = [...tareas, tarea];

    res.send({ result: "ok", message: "Tarea agregada satisfactoriamente" });
});

//Es lo mismo...
/*app.get("/tarea", function(req,res){
    res.send(tareas);
});*/

app.get("/killnode", (req, res) => {
    while (1) {
        console.log("Muertooooo...");
        sleep(1000);
    }
})

//express se le podria haber ocurrio app.get("/").then(()=>{...})  promise Style...
app.get("/leyendas", (req, res) => {
    console.log("GET /Leyendas");

    const sleep = new Promise((accept, reject) => {
        console.log("Promise Started");
        setTimeout(() => {
            console.log("Promise Acepted");
            accept();
        },
            1000);
    }).then(() => {
        res.send({
            titulo: "Bienvenidos a Mi App",
            subtitulo: "Ejemplo de App Nodejs"
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

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}.`);
});

/*app.listen(PORT, function(){
    console.log(`Escuchando en el puerto ${PORT}.`);
});*/