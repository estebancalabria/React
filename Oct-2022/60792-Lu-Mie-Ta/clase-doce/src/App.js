import elEstore from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import ListarTareas from "./containers/ListarTareas.container";
import AgregarTarea from "./containers/AgregarTarea.container";

function App() {
  return (
    <BrowserRouter>
      <Provider store={elEstore}>
        <header className="my-header">
          <h1>Redux-Todo List</h1>
        </header>
        <main style={{margin:"2em"}}>
           <Routes>
              <Route path="/" element={<ListarTareas />} />
              <Route path="/agregar" element={<AgregarTarea />} />
           </Routes>
        </main>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
