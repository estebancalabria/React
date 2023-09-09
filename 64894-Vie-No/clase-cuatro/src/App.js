import Cabecera from "./components/Cabecera";
import TodoList from "./components/TodoList";


function App() {
  return (<>
    <Cabecera titulo="Bienvidos a otra clase de React" subtitulo="Hoy programermos una Todo List" />
    <main className="container w-50">
      <TodoList />
    </main>
  </>
  );
}

export default App;
