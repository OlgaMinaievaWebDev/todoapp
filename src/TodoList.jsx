import TodoItem from "./TodoItem";

export default function TodoList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onClearList,
}) {
  return (
    <>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      ))}
      <div className="actions">
        <select className="btn">
          <option value="all">All Tasks</option>
          <option value="done">Complete</option>
          <option value="notDone">In progress</option>
        </select>
        <button className="btn" onClick={onClearList}>
          Clear List
        </button>
      </div>
    </>
  );
}
