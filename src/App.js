import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Form onAddTasks={handleAddTask} />
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
