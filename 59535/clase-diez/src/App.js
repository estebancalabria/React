import "bootstrap/dist/css/bootstrap.css"
import ListaDeAlumnos from "./containers/ListaDeAlumnos";
import store from "./store/store";
import { Provider } from "react-redux";
import Cabecera from "./components/Cabecera";

function App() {
  return (
    <Provider store={store}>
      <Cabecera titulo="React University" subtitulo="Powered by EducacioIT" />
      <main className="container">
        <ListaDeAlumnos />
      </main>
    </Provider>
  );
}

export default App;
