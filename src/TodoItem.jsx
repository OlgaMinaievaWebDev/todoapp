export default function TodoItem({ task }) {
  console.log(task);
  return (
    <div className="todo--item">
      <input type="checkbox" />
      <h3>{task.text}</h3>
      <div className="todo--icons">
        <i className="fa-solid fa-trash-can"></i>
        <i className="fa-solid fa-pen"></i>
      </div>
    </div>
  );
}
