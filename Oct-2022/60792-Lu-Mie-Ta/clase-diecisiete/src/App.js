import { Provider } from "react-redux";
import { ReduxCounter } from "./components/ReduxCounter";
import SimpleCounter from "./components/SimpleCounter";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <SimpleCounter />
      <ReduxCounter />
      <div>
      Learn React
      </div>
    </Provider>
  );
}

export default App;
