export default function TodoItem() {
  return (
    <div className="todo--item">
      <input type="checkbox" />
      <div>
        <h3>Create a project</h3>
        <p>5:23 NOv 24</p>
      </div>
      <div className="todo--icons">
        <i class="fa-solid fa-trash-can"></i>
        <i class="fa-solid fa-pen"></i>
      </div>
    </div>
  );
}
