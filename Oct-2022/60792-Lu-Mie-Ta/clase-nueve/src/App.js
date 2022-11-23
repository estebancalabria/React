import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";

//import AgregarTarea from "./components/AgregarTarea";
import AgregarTarea from "./containers/AgregarTarea.container";

import ListaTareas from "./containers/ListaTareas";
import theOne from "./store/store";

function App() {
  return (
    <Provider store={theOne}>
      <header className="alert alert-success text-center">
        <h1>Redux Todo List</h1>
      </header>
      <main className="container">
        <ListaTareas />
        <AgregarTarea />
      </main>
    </Provider>
  );
}

export default App;
