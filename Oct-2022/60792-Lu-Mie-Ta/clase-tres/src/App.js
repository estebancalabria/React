import Cabecera from "./components/Cabecera";
import Centrador from "./components/Centrador";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Cabecera titulo="Mi Fantastica TodoList" />
      <main>
        <Centrador>
          <TodoList titulo="Mis Tareas" />
        </Centrador>
      </main>
    </div>
  );
}

export default App;
