import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Cabecera from "./components/Cabecera";
import URLS from "./init/URLS";

//let app = new App();
function App() {
  //Desestructuring
  //let arreglo = ["Juan","Pedro"];
  //const [juan,pedro] = arreglo;
  //lo mismo que
  //juan = arreglo[0];
  //pedro = arreglo[1];
  const [titulo, setTitulo] = useState("Titulo No Definido"); //I18N
  useEffect( ()=>{
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

    /*axios.get(URLS.URL_LEYENDAS).then((resp)=>{
      setTitulo(resp.data.titulo);
    });*/

    (async function(){
      var resp = await axios.get(URLS.URL_LEYENDAS);
      setTitulo(resp.data.titulo);
    })(); //IIFE : Inmediate Invoked Function Expresion

  },[]);

  return (
    <div>
       <Cabecera titulo={titulo} />
    </div>
  );
}

export default App;

