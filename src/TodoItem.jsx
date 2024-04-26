export default function TodoItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <div className="todo--item">
      <input
        type="checkbox"
        value={task.complete}
        onChange={() => onToggleTask(task.id)}
      />
      <h3 style={task.complete ? { textDecoration: "line-through" } : {}}>
        {task.text}
      </h3>
      <i
        className="fa-solid fa-trash-can todo--icons"
        onClick={() => onDeleteTask(task.id)}
      ></i>
    </div>
  );
}
