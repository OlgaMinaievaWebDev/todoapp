import TodoList from "./TodoList";
export default function App() {
  // const [tasks, setTasks] = useState([]);
  // const [text, setText] = useState("");

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

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
