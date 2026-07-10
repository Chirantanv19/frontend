import type { Todo } from "../../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="text-gray-500 mt-4">No todos yet. Add one above!</p>;
  }

  return (
    <ul className="mt-6 space-y-2">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
          onToggle={onToggle} 
        />
      ))}
    </ul>
  );
}