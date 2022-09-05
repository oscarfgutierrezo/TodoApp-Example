import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoReducer";

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
  
  const [todos, dispatch] = useReducer( todoReducer, [], init );

  const todosCount = todos.length

  const pendingTodos = todos.filter( todo => !todo.done ).length

  useEffect(() => {
    localStorage.setItem( 'todos', JSON.stringify(todos) )
  }, [todos]);

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };
    dispatch( action );
  };

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  };

  const handleToggleTodo = ( id ) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodos,
  };
}
