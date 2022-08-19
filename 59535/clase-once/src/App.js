import "bootstrap/dist/css/bootstrap.css"
import ListaDeAlumnos from "./containers/ListaDeAlumnos";
import store from "./store/store";
import { Provider } from "react-redux";
import Cabecera from "./components/Cabecera";
import FormAlumno from "./containers/FormAlumno";

function App() {
  return (
    <Provider store={store}>
      <Cabecera titulo="React University" subtitulo="Powered by EducacioIT" />
      <main className="container">
        <div className="row">
            <div className="col">
              <FormAlumno  />
            </div>
            <div className="col"><ListaDeAlumnos /></div>
        </div>   
      </main>
    </Provider>
  );
}

export default App;
