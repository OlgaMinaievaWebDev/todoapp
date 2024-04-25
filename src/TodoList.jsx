import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <>
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
