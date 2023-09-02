
import Cabecera from "./components/Cabecera";
import ContadorClase from "./components/ContadorClase";
import ContadorFuncional from "./components/ContadorFuncional";
import FichaPersona from "./components/FichaPersona";

function App() {
  return (
    <div>
      <Cabecera titulos={["Curso de React", "Clase Tres", "Manejo del state"]}/>
      <main className="container">
        <FichaPersona nombre="Esteban" apellido="Calabria" edad={42} imagen="https://thispersondoesnotexist.com/"/>
        <ContadorFuncional />
        <ContadorClase />
      </main>
    </div>
  );
}

export default App;
