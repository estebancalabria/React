import Cabecera from "./components/Cabecera";
import ListaDePersonajes from "./components/ListaDePersonajes";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Cabecera />
      <main className="container">
        <ListaDePersonajes />
      </main>
    </div>
  );
}

export default App;
