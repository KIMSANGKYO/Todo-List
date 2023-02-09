import { useState } from "react";
import styled from "styled-components";

import TodoInput from "../component/TodoInput";
import TodoList from "../component/TodoList";
import useFetch from "../hooks/useFetch";

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function TodoPage() {
  const todos = useFetch("http://localhost:3001/todos");
  // const [value, setValue] = useState("");
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "8시에 일어나기", checked: false },
  //   { id: 2, text: "째각이 켜기", checked: true },
  //   { id: 3, text: "모닝커피 마시기", checked: false },
  //   { id: 4, text: "코플릿 풀기", checked: false },
  //   { id: 5, text: "유어클래스 학습", checked: false },
  //   { id: 6, text: "블로그 작성하기", checked: false },
  //   { id: 7, text: "약 챙겨먹기", checked: false },
  //   { id: 8, text: "운동하기", checked: false },
  //   { id: 9, text: "메서드 공부하기", checked: false },
  //   { id: 10, text: "리액트 프로젝트 구현", checked: false },
  //   { id: 11, text: "스터디원 응원하기", checked: false },
  // ]);

  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   todoAdd(value);
  //   setValue("");
  // };
  // const todoAdd = (text) => {
  //   if (text === "") {
  //     return alert("목표를 입력해주세요");
  //   } else {
  //     const newTodo = {
  //       id: todos.length + 1,
  //       text,
  //       checked: false,
  //     };
  //     setTodos((todos) => [newTodo, ...todos]);
  //   }
  // };
  // const todoDelete = (id) => {
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // };
  return (
    <Todo>
      <TodoInput todos={todos} />

      {todos.map((todo) => (
        <TodoList todo={todo} key={todo.id} />
      ))}
    </Todo>
  );
}
// {words.map((word) => (
//   <Word word={word} key={word.id} />
// ))}
