import "bootstrap/dist/css/bootstrap.css";
import TodoListFuncional from "./components/TodoList.funcional";

function App() {
  return (
    <div>
      <header className="bg-secondary text-center p-3 mb-4">
          <h1>React Devloper Clase 4</h1>
          <h2>Mi insuperable Todo List</h2>
      </header>
      <main className="container">
        <TodoListFuncional />
      </main>
    </div>
  );
}

export default App;
