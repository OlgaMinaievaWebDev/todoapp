export default function TodoItem() {
  return (
    <div className="todo--item">
      <input type="checkbox" />
      <h3>text task</h3>
      <div className="todo--icons">
        <i className="fa-solid fa-trash-can"></i>
        <i className="fa-solid fa-pen"></i>
      </div>
    </div>
  );
}
