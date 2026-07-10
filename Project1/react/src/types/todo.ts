import { z } from "zod";

// 1. The shape of our actual data
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// 2. The strict validation schema for creating a new todo
export const todoFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title is too long"),
});

// 3. Infer the TypeScript type directly from the Zod schema
export type TodoFormData = z.infer<typeof todoFormSchema>;