import "./App.css";
import { Todo } from "./types/todo";
import TodoList from "./components/todos/TodoList";
import TodoForm from "./components/todos/TodoForm";

function App() {
  const dummyTodos: Todo[] = [
    { id: "1", title: "Buy groceries", completed: false },
    { id: "2", title: "Walk the dog", completed: true },
  ];

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList todos={dummyTodos} />
    </div>
  );
}

export default App;