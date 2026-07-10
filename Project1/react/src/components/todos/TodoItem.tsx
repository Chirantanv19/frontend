import type { Todo } from "../../types/todo";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div>
      {todo.title}
    </div>
  );
}