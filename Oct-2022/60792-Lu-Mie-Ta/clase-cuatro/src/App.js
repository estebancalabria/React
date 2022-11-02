import Cabecera from "./components/Cabecera";
import ListaDeContactos from "./components/ListaDeContactos";
import "bootstrap/dist/css/bootstrap.css";
import AgregarContacto from "./components/AgregarContacto";

function App() {
  return (
    <div>
      <AgregarContacto />
      <Cabecera titulo= "Lista de contactos" />
      <main className="container">
         <ListaDeContactos />
      </main>
    </div>
  );
}

export default App;
