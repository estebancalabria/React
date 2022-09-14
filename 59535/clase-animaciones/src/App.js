import Animated from "./Animated";
import Cabecera from "./Cabecera";
import Contador from "./Contador";


function App() {
  return (
    <div>
      <Cabecera />
      <Contador />
      <Animated texto="Este es un div animado" />
    </div>
  );
}

export default App;
