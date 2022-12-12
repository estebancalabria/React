import "bootstrap/dist/css/bootstrap.css"
import { Provider } from "react-redux";
import Heroe from "./containers/Heroe.container";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <header className="alert alert-info text-center">
          <h1>World Cup Heroes</h1>
      </header>
      <main className="container text-center">
        <Heroe />
      </main>
    </Provider>
  );
}

export default App;
