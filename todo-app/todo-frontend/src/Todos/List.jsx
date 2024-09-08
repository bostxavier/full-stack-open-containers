import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => {
    console.log(todo)
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => {
        return (
          <Todo todo={todo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} key={todo.id} />
        )
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
