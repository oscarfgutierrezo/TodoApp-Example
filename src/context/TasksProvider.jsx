import { useTodo } from '../hooks/useTodo';
import { TasksContext } from './TasksContext'

export const TasksProvider = ({ children }) => {
  
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodos } = useTodo();

  return (
    <TasksContext.Provider 
      value={
        { 
          todos, 
          handleNewTodo, 
          handleDeleteTodo, 
          handleToggleTodo, 
          todosCount, 
          pendingTodos,
        }
      } >
      { children }
    </TasksContext.Provider>
  )
}
