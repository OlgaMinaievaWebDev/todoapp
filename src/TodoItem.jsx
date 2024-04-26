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
      <div className="todo--icons">
        <i
          className="fa-solid fa-trash-can"
          onClick={() => onDeleteTask(task.id)}
        ></i>
        <i className="fa-solid fa-pen"></i>
      </div>
    </div>
  );
}
