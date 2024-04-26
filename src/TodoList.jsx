import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDeleteTask, onToggleTask }) {
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
    </>
  );
}
