import Cabecera from "./components/Cabecera";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Cabecera titulo="Bucket List" subtitulo="La mejor TodoList de React" />
      { /* new Cabecera({titulo="..", subtitulo="..."}) */}
      <main className="container w-50">
          <TodoList />
      </main>
    </div>
  );
}

export default App;
