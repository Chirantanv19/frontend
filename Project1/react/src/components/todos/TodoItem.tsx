import type { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between p-3 border rounded-md shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 cursor-pointer"
        />
        <span className={`${todo.completed ? "line-through text-gray-400" : ""}`}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>
    </li>
  );
}