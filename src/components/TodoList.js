import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>What are we doing today?</h1>
    </div>
  )
}

export default TodoList