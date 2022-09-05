import { AddTask, Header, TaskList } from "./components"
import { TasksProvider } from "./context/TasksProvider";

export const TodoApp = () => {
    
  return (
    <TasksProvider>
      <div className="container">
        <Header />
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  )
}
