import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask(text) {
    const newTask = {
      text,
      id: Date.now(),
      isComplete: false,
    };
    setTasks((tasks) => [...tasks, newTask]);
    setText("");
  }
  return (
    <>
      <h1>TODO LIST</h1>
      <div className="todo--input">
        <select className="btn">
          <option value="all">All Tasks</option>
          <option value="done">Complete</option>
          <option value="notDone">In progress</option>
        </select>
        <input
          type="text"
          placeholder="Set Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" onClick={() => addTask(text)}>
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </>
  );
}
