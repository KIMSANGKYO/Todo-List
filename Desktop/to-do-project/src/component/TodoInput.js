import { useRef, useState } from "react";
import styled from "styled-components";

const TodoInputLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f3fc;
  height: 150px;
  width: 100%;
  > input {
    height: 40px;
    width: 500px;
    padding-left: 20px;
    margin-right: 20px;
    border: 0.1px solid #bdbdbd;
    border-radius: 20px;
  }
  .fa-circle-plus {
    color: #e91e63;
    cursor: pointer;
  }
`;

export default function TodoInput({ todo }) {
  const [todoInput, setTodoInput] = useState("");
  const nextId = useRef(0);
  const todoAdd = (e) => {
    e.preventDefault();
    console.log(todo);
    fetch(`http://localhost:3001/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body 에 보낼 때 json 파일로 변경
      body: JSON.stringify({
        id: nextId.current,
        text: todoInput,
        checked: false,
      }),
    }).then((res) => {
      //응답이 성공하게 될 때 (response.ok)
      if (res.ok) {
        alert("생성 완료");
        nextId.current += 1;
        setTodoInput("");
        window.location.reload();
      }
    });
  };

  return (
    <TodoInputLine>
      <input
        placeholder="목표를 추가해주세요"
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      ></input>
      <i
        onClick={todoAdd}
        role="button"
        className="fa-sharp fa-solid fa-circle-plus fa-2x"
      ></i>
    </TodoInputLine>
  );
}
