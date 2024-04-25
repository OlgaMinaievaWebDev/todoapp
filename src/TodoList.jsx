import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <>
      <h1>TODO LIST</h1>
      <div className="todo--input">
        <select className="btn">
          <option value="all">All Tasks</option>
          <option value="done">Complete</option>
          <option value="notDone">In progress</option>
        </select>
        <input type="text" placeholder="Set Task" />
        <button className="btn">Add Task</button>
      </div>

      <TodoItem />
    </>
  );
}

// export default function TodoList({ tasks, text, onDeleteTask, onAddTask }) {
//   return (
//     <>
//

//       {tasks.map((task) => (
//         <TodoItem
//           key={task.id}
//           task={task}
//           onDeleteTask={deleteTask}
//           ontoggleComplete={handleToggleItem}
//         />
//       ))}
//     </>
//   );
// }
