
interface Todo{
    id: string;
    title: string;
    completed: boolean;
}

export default function TodoItem({todo}:{todo:Todo}){
    return(
        <div>
            {todo.id}
            {todo.title}
            {todo.completed}
        </div>
    )
}