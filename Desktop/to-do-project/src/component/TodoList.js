import { useState } from "react";
import styled from "styled-components";

const TodoTag = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;

  > ul {
    list-style: none;
    width: 80%;
    padding: 0;
    margin: 0;

    > li {
      display: flex;
      width: 100%;
      height: 80px;
      align-items: center;
      margin-top: 20px;
      background-color: #f2f3fc;
      border-radius: 30px;
    }
  }
  .check-name {
    display: flex;
    width: 50%;
    > input {
      margin-left: 30px;
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
    margin-right: 30px;
    cursor: pointer;
    font-size: 20px;
  }
  .fa-trash {
    cursor: pointer;
    font-size: 20px;
  }
`;

export default function TodoList({ todo }) {
  const [isTodoCheck, setIsTodoCheck] = useState(todo.checked);
  const [todoUpdateMode, setTodoUpdateMod] = useState(false);
  const [todoUpdateInput, setTodoUpdateInput] = useState("");

  const isTodoDone = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        checked: !isTodoCheck,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsTodoCheck(!isTodoCheck);
      }
    });
  };

  const todoDelete = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("삭제완료");
        window.location.reload();
      }
    });
    if (todo.id === 0) {
      return null;
    }
  };

  const todoUpdate = () => {
    setTodoUpdateMod(true);
  };

  const todoUpdateComplete = () => {
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        text: todoUpdateInput,
      }),
    }).then((res) => {
      if (res.ok) {
        setTodoUpdateMod(false);
        alert("수정완료");
        window.location.reload();
      }
    });
  };

  return (
    <TodoTag>
      <ul>
        <li>
          <div className="check-name">
            <input
              type="checkbox"
              checked={isTodoCheck}
              onChange={isTodoDone}
            ></input>

            {todoUpdateMode ? (
              <div>
                <input
                  value={todoUpdateInput}
                  onChange={(e) => setTodoUpdateInput(e.target.value)}
                ></input>
                <button
                  className="edit-button"
                  onClick={todoUpdateComplete}
                ></button>
              </div>
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="delete-update">
            <i className="fa-sharp fa-solid fa-trash" onClick={todoDelete}></i>
            <i className="fa-sharp fa-solid fa-pen" onClick={todoUpdate}></i>
          </div>
        </li>
      </ul>
    </TodoTag>
  );
}
