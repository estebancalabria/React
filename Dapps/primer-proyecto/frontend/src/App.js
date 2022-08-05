import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

//Bilardo mete cambiaso...
import AddTodo from "./containers/AddTodo";
//import AddTodo from "./components/AddTodo";

import Cabecera from "./components/Cabecera";

//Bilardo mete cambio...
//import TodoList from "./components/TodoList";
import TodoList from "./containers/TodoList";

import URLS from "./init/URLS";
import { Provider } from "react-redux";
import theOnlySourceOfTruth from "./store/store";

//Ejemplo de uso del High Order Component
//import red from "./hoc/red";
/*import TablaChild from "./components/Tabla";
import background from "./hoc/background";
//const Tabla = background("green",TablaChild);
const Tabla = background("green")(TablaChild);*/
import Tabla from "./containers/Tabla";
import Updater from "./components/Updater";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


/*let defaultTareas = [
  { id: 1, nombre: "Tarea Uno", done: false },
  { id: 2, nombre: "Tarea Dos", done: false },
  { id: 3, nombre: "Tarea Tres", done: false },
];*/

//let app = new App();
function App() {
  //Desestructuring
  //let arreglo = ["Juan","Pedro"];
  //const [juan,pedro] = arreglo;
  //lo mismo que
  //juan = arreglo[0];
  //pedro = arreglo[1];
  const [titulo, setTitulo] = useState("Titulo No Definido"); //I18N
  //const [tareas, setTareas] = useState(defaultTareas);  //useState >> refresh

  useEffect(() => {
    //fetch(url, ()=>{}) callbackStyle

    /*fetch(URLS.URL_LEYENDAS)
      .then((resp)=>(resp.json()))  //Funcion flecha ()=>() con el return implicito
      //.then((resp)=>{return resp.json()})
      .then((data)=>{
        setTitulo(data.titulo);
      });   //En este caso ()=>{} el return lo tengo que hacer explicito*/

    //fetch(...).then(..).catch(..)

    /*async function doIt(){
      try{
        const resp = await fetch(URLS.URL_LEYENDAS);
        const data = await resp.json();
        setTitulo(data.titulo);
      }catch(error){
        console.log(error);
      }
    }
    doIt();*/

    axios.get(URLS.URL_LEYENDAS).then((resp) => {
      setTitulo(resp.data.titulo);
    });

    //TODO: No quiero por ahora usar mi backed
    /*
    (async function(){
      var resp = await axios.get(URLS.URL_LEYENDAS);
      setTitulo(resp.data.titulo);
    })(); //IIFE : Inmediate Invoked Function Expresion

    axios.get(URLS.URL_TAREAS).then((resp)=>{ setTareas(resp.data) });
    */
  }, []);

  return (
    <BrowserRouter>
      <Provider store={theOnlySourceOfTruth}>
        <Updater />
        <Cabecera titulo={titulo} />

        <nav className="mb-2">
          <ul className="nav bg-dark">
            <li className="nav-item"><Link className="nav-link" to="">Tareas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reporte">Reporte</Link></li>
          </ul>
        </nav>

        <main className="container w-50">
          {
            //Saco las props<TodoList tareas={tareas} />
          }
          <Routes>
            <Route path="" element={<>
              <TodoList />
              <AddTodo />
            </>} />
            <Route path="/reporte" element={<Tabla />} />
          </Routes>

          <hr />
          
          {/*
        <AddTodo onAddTarea={(nueva) => {
          /*if (nueva.length > 0) {
            let tareaNueva = {
              //TODO:Que el backend genere el ID
              id: Math.max(...tareas.map(t => t.id), 0) + 1,
              nombre: nueva,
              done: false
            }
            axios.post(URLS.URL_TAREAS, tareaNueva).then((resp) => {
              this.setTareas([...tareas, tareaNueva]);
            }).catch((err) => {
              alert(JSON.stringify(err.response.data));
            });
          }
        }} />
        */}
        </main>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

