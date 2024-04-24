import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [tasks, setTasks] = useState("");
  return (
    <>
      <h1>TODO LIST</h1>
      <div className="todo--input">
        <button className="btn">All Tasks</button>
        <input type="text" placeholder="Set Task" />
        <button className="btn">Add Task</button>
      </div>
      <TodoItem />
    </>
  );
}
