import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos];
    console.log(todos, todo);
    setTodos(newTodos);
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  }

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      // Toggle todo completion
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos)
  }
  return (
    <div>
      <h1>What are we doing today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        remove={removeTodo}
      />
    </div>
  )
}

export default TodoList