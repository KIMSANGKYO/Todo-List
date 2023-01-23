import { useState } from "react";
import InputBar from "../component/InputBar";
import TodoList from "../component/TodoList";

export default function TodoPage() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "가", checked: false },
    { id: 2, text: "나", checked: false },
    { id: 3, text: "다", checked: false },
  ]);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    todoAdd(value);
    setValue("");
  };
  const todoAdd = (text) => {
    if (text === "") {
      return alert("목표를 입력해주세요");
    } else {
      const newTodo = {
        id: todos.length + 1,
        text,
        checked: false,
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };
  const todoDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <InputBar onChange={onChange} onSubmit={onSubmit} value={value} />
      <TodoList todos={todos} setTodos={setTodos} todoDelete={todoDelete} />
    </div>
  );
}
