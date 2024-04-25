import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
  // function addTask(text) {
  //   const newTask = {
  //     text,
  //     id: Date.now(),
  //     isComplete: false,
  //   };
  //   setTasks((tasks) => [...tasks, newTask]);
  //   setText("");
  // }

  // function deleteTask(id) {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // }

  // function handleToggleItem(id) {
  //   setTasks((tasks) =>
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, isComplete: !task.isComplete } : task
  //     )
  //   );
  // }}
  // const [text, setText] = useState("");
  return (
    <div className="App">
      <Form />
      <TodoList />
    </div>
  );
}
