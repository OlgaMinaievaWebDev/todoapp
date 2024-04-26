import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("all");
  let sortedTasks = [];

  if (sortBy === "all") sortedTasks = tasks;
  if (sortBy === "done")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.complete) - Number(b.complete));
  if (sortBy === "alphabet")
    sortedTasks = tasks.slice().sort((a, b) => a.text.localeCompare(b.text));

  return (
    <>
      {sortedTasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      ))}
      <div className="actions">
        <select
          className="btn"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="done">Complete</option>
          <option value="alphabet">In order</option>
        </select>
        <button className="btn" onClick={onClearList}>
          Clear List
        </button>
      </div>
    </>
  );
}
