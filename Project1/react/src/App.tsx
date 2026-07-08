import './App.css'
import TodoItem from './components/todos/TodoItem'

function App() {
   const dummyTodo = {id: "1", title: "Buy groceries", completed:false}

  return (
       <TodoItem todo={dummyTodo}/>
  )
}

export default App
