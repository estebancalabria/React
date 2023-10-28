import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import ListaDeTareas from "./containers/ListaDeTareas";
import { Provider } from "react-redux";
import todoListStore from "./store/todoListStore";
import AgregarTarea from "./containers/AgregarTarea";

function App() {

  const centrarHijos = {
    display: "flex",
    alignItems: "center",
    flexDirection:"column",
    height: "100%"
  }

  return (
    <Provider store={todoListStore}>
      <div style={{ height: "100vh" }}>
        <Bs.Alert variant="info" className="text-center">
          <h1>Revisitando la TodoList con Redux</h1>
        </Bs.Alert>
        <Bs.Container style={centrarHijos}>
          <ListaDeTareas />
          <AgregarTarea />
        </Bs.Container>
      </div>
    </Provider>
  );
}

export default App;
