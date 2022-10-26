import "bootstrap/dist/css/bootstrap.css";
import Barra from "./components/Barra";
import Cabecera from "./components/Cabecera";
import Centrador from "./components/Centrador";
import Lista from "./components/Lista";
import PieDePagina from "./components/PieDePagina";

function App() {
  return (
    <>
      <Cabecera titulo="Bienvenidos a React" subtitulo="Lo mejor en Frontend" />
      <Barra contenido="Clase 2 - 26/10/2022" oscuro={true} />
      <Centrador>
        <Lista titulo="Caracteristicas de React"
          items={["Facil de Usar", "Hecho por Facebook", "Una Masa"]} />
      </Centrador>
      <PieDePagina contenido="CopyRight 2022. EducacionIT." />
    </>
  );
}

export default App;

