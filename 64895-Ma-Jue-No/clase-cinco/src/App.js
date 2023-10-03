import Cabecera from "./components/Cabecera";
import "bootstrap/dist/css/bootstrap.css";
import PersonajesSouthPark from "./components/PersonajesSouthPark";
import PersonajesRickAndMorty from "./components/PersonajesRickAndMorty";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {

  const [useSpapi, setSpapi] = useState(true);

  return (
    <div>
      <Cabecera titulo="Curso React Clase 5" subtitulo="Llamadas asincronicas" />
      <div className="container text-end mb-2">
        <button className="btn btn-primary" onClick={() => {
          Swal.fire({
            title: "¿Desea cambiar de api?",
            showCancelButton: true
          }).then((resp) => {
            resp.isConfirmed && setSpapi(!useSpapi);
          })
        }}>
          Cambiar API
        </button>
      </div>
      <main className="container">
        {useSpapi ? <PersonajesSouthPark /> : <PersonajesRickAndMorty />}
      </main>
    </div>
  );
}

export default App;
