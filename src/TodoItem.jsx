export default function TodoItem({ task, onDeleteTask }) {
  console.log(task);
  return (
    <div className="todo--item">
      <input type="checkbox" />
      <h3>{task.text}</h3>
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
