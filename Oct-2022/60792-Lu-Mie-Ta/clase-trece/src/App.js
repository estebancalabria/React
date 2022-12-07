import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Init from "./components/Init";
import Tabla from "./containers/Tabla.container";
import theOnlyTruth from "./store/store";


function App() {

  return (
    <Provider store={theOnlyTruth}>
      <BrowserRouter>
        <header className="alert alert-info text-center">
          Mis Alumnos
        </header>
        <main className="container">
          <Tabla />
        </main>
        <Init />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
