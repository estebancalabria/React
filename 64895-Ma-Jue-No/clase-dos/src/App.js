import "bootstrap/dist/css/bootstrap.css";
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Lista from "./components/Lista";
import Titulo from "./components/Titulo";


function App() {
  return (
    <>
      <Cabecera titulo="Bienvenidos al curso de React" subtitulo="Clase 2" />
      <main className="container">
        <Titulo texto="Caracteristicas de React" />
        <Lista items={["Dinamico", "Facil", "Amigable", "Requiere Practica","Es Divertido"]} />
      </main>
      <Footer empresa="Educacion IT" disclaimer="Todos los derechos reservados"/>
    </>
  );
}

export default App;
