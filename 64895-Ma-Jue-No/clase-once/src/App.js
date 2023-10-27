import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap"
import Carta from "./components/Carta";
import { Provider } from "react-redux";
import simpsonsReduxStore from "./redux/simpsons-redux";
import ListaPersonajesSimpsons from "./containers/ListaPersonajesSimpsons";
import FetchListaPersonajes from "./containers/FetchListaPersonajes";


function App() {
  return (
    <Provider store={simpsonsReduxStore}>
      <FetchListaPersonajes />
      <Bs.Container>
        <Bs.Alert variant="info">
          Lista de Personajes de Los Simptons
        </Bs.Alert>
        <ListaPersonajesSimpsons />
      </Bs.Container>
    </Provider>
  );
}

export default App;
