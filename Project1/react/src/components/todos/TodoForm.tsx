import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoFormSchema, type TodoFormData } from "../../types/todo";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  // Initialize react-hook-form with our Zod schema
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoFormSchema),
  });

  // This only runs if Zod validation passes
  const onSubmit = (data: TodoFormData) => {
    onAdd(data.title);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          /* We register the input instead of using value/onChange */
          {...register("title")}
          placeholder="What needs to be done?"
          className="flex-1 border rounded-md px-3 py-2"
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      
      {/* Conditionally render Zod error messages */}
      {errors.title && (
        <span className="text-red-500 text-sm font-medium">
          {errors.title.message}
        </span>
      )}
    </form>
  );
}