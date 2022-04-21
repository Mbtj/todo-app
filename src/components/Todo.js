import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, remove }) {
  // const { todos, completeTodo, remove } = props;
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  return todos.map((todo, index) => {
    return (<div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}>
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
        onClick={() => remove(todo.id)}
        className="delete-icon" />
        <TiEdit 
         onClick={() => setEdit({id: todo.id, value: todo.text})}
         className="edit-icon" />
      </div>
    </div>)
  });

}

export default Todo