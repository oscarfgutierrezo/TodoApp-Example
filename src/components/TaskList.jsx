import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import { TaskItem } from "./TaskItem"

export const TaskList = () => {
  
  const { todos, pendingTodos, todosCount } = useContext( TasksContext )
  const [ removeBtnActive, setRemoveBtnActive ] = useState(null);
  
  return (
    <div className="tasks-section">
      { (todos.length < 1) 
        ? 
          <p className="tasks-section__list-empty-msg">Your task list is empty</p>
        :
          <>
            <div className="tasks-section__counters">
              <p>Total Tasks:<span>{todosCount}</span> </p>
              <p>Pending Tasks:<span>{pendingTodos}</span> </p>
            </div>
            <ul className="tasks-section__task-list">
              {todos.map( todo => <TaskItem key={ todo.id } todo={ todo } removeBtnActive={removeBtnActive} setRemoveBtnActive={setRemoveBtnActive} /> )}
            </ul>
            { !pendingTodos && <p className="tasks-section__nice-msg">Nice work! You don't have pending tasks</p> }
          </>
      }
    </div>
  )
}
