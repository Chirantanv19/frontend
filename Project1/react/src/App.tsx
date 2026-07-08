import "./App.css";
import { Todo } from "../../types/todo";
import TodoList from "./components/todos/TodoList";

function App() {

const dummyTodos: Todo[] = [
  { id: "1", title: "Buy groceries", completed: false },
  { id: "2", title: "Walk the dog", completed: true },
  { id: "3", title: "Finish React tutorial", completed: false },
  { id: "4", title: "Read a book chapter", completed: false }
];

  return (
    <>
      <TodoList todos={dummyTodos} />
    </>
  );
}

export default App;
