import { useContext, useState } from "react"
import { TasksContext } from "../context/TasksContext"

export const TaskItem = ({ todo, removeBtnActive, setRemoveBtnActive }) => {
    
  const { handleDeleteTodo, handleToggleTodo } = useContext( TasksContext )

  return (
    <li className="task-item">
      <div className={`task-item__name ${todo.done && 'task-item__name--check'}`} onClick={ () => handleToggleTodo(todo.id)}>
        { 
          (todo.done) 
          ? 
            <i className="fa-regular fa-circle-check"></i>
          : 
            <i className="fa-regular fa-clock"></i>
        }
        <p>{todo.task}</p>
      </div>
      <div className="task-item__icons">
        {
          (removeBtnActive === todo.id)
          ? 
            <div className="task-item__confirm-remove">
              <i className="fa-solid fa-check" onClick={ () => handleDeleteTodo(todo.id) }></i>
              <i className="fa-solid fa-xmark" onClick={ () => setRemoveBtnActive(null) }></i>
            </div>
          :
            <i className="fa-solid fa-trash" onClick={ () => setRemoveBtnActive(todo.id) }></i> 
        } 
      </div>
    </li>
  )
}

