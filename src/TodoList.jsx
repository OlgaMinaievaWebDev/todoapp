import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [tasks, setTasks] = useState("");
  return (
    <>
      <TodoItem />
    </>
  );
}
