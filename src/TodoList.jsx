import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDeleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
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
