import { useState } from "react";

export default function Form({ onAddTasks }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    const newTask = {
      text,
      complete: false,
      id: Date.now(),
    };
    console.log(newTask);
    onAddTasks(newTask);
    setText("");
  }

  return (
    <form className="todo--input" onSubmit={handleSubmit}>
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
      <button className="btn">Add Task</button>
    </form>
  );
}
