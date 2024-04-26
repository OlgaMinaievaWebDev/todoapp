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

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  }

  function handleClearList() {
    setTasks([]);
  }

  return (
    <div className="App">
      <Form onAddTasks={handleAddTask} />
      <TodoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onClearList={handleClearList}
      />
    </div>
  );
}
