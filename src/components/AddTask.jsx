import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { useForm } from "../hooks/useForm";

export const AddTask = () => {
  
  const { task, onInputChange, onResetForm} = useForm({task: ''});
  const { handleNewTodo } = useContext( TasksContext );

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.length < 1) return;
    const newTodo = {
      id: new Date().getTime(),
      task,
      done: false, 
    }
    handleNewTodo(newTodo);
    onResetForm()
  };  
  
  return (
    <form onSubmit={ handleSubmit } className="add-task">
      <div className="add-tast__input-container">
        <input type="text" placeholder="Type your task" name="task" value={task} onChange={onInputChange}/>
        <i className="fa-solid fa-thumbtack"></i>
      </div>
      <button type="submit" >Add</button>
    </form>
  );
}
