import { useState } from "react";

export default function TodoForm() {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Stops the page from refreshing
    console.log("Submitted:", title);
    setTitle(""); // Clears the input field after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
}