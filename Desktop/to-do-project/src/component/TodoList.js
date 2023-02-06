import { useState } from "react";
import styled from "styled-components";

const TodoTag = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #ffcc80;
  justify-content: center;

  > ul {
    list-style: none;
    background-color: #ffcc80;
    width: 80%;
    padding: 0;
    margin: 0;

    > li {
      display: flex;
      width: 100%;
      height: 100px;
      align-items: center;
      margin-top: 20px;
      background-color: #ffffb0;
      border-radius: 30px;
    }
  }
  .check-name {
    display: flex;
    width: 50%;
    > input {
      margin-left: 20px;
      margin-right: 20px;
      transform: scale(1.5);
    }
  }
  .delete-update {
    display: flex;
    width: 50%;
    justify-content: flex-end;
  }
  .fa-pen {
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
    font-size: 20px;
  }
  .fa-trash {
    cursor: pointer;
    font-size: 20px;
  }
`;

export default function TodoList({ todos, todoDelete }) {
  // const checkHandler = () => {
  //   setIsChecked(!isChecked);
  // };
  return (
    <TodoTag>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="check-name">
              <input checked={todo.checked} type="checkbox"></input>
              <div>{todo.text}</div>
            </div>
            <div className="delete-update">
              <i
                onClick={() => {
                  todoDelete(todo.id);
                }}
                className="fa-sharp fa-solid fa-trash"
              ></i>
              <i className="fa-sharp fa-solid fa-pen"></i>
            </div>
          </li>
        ))}
      </ul>
    </TodoTag>
  );
}
