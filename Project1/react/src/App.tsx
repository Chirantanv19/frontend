import { useState } from "react";
import "./App.css";
import type { Todo } from "./types/todo";
import TodoList from "./components/todos/TodoList";
import TodoForm from "./components/todos/TodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Buy groceries", completed: false },
    { id: "2", title: "Walk the dog", completed: true },
  ]);

  function handleAddTodo(title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleToggleTodo(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">My Todos</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList 
        todos={todos} 
        onDelete={handleDeleteTodo} 
        onToggle={handleToggleTodo} 
      />
    </div>
  );
}

export default App;