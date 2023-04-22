import { useState, useEffect } from "react";
import "../components/style.css";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

export default function ToDo() {
  const [todos, setTodos] = useState([
    { id: 1, title: "todo1" },
    { id: 2, title: "todo2" }
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <section className="todoapp">
      <TodoAdd setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoFooter />
    </section>
  );
}
