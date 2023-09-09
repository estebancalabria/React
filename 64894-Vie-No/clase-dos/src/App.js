import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Navegacion from "./components/Navegacion";
import Ofertas from "./components/Ofertas";

function App() {
  return (<>
    <Cabecera titulo="Bienvenidos a Lipanmerce" subtitulo="El mejor E-Commerce programado en React" />
    <Navegacion opciones={["Inicio", "Ofertas", "Ubicacion"]} />
    <main>
      <Ofertas productos={[
        { nombre: "Meme de Moe ", precio: 100 },
        { nombre: "Meme de Cilian Murphy", precio: 200 },
        { nombre: "Meme del gatito triste", precio: 300 },
        { nombre: "Meme programador", precio: 250 }
      ]} />
    </main>
    <Footer empresa="EducacionIT" año={2023} mensaje="Todos los derechos reservados"></Footer>
  </>);
}

export default App;
