import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const GoalTag = styled.div`
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
  .check-list {
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
    color: #424242;
  }
  .fa-trash {
    cursor: pointer;
    font-size: 20px;
    color: #e91e63;
  }
  .edit-button {
    width: 30px;
    height: 30px;
  }
`;

export default function GoalList({ goal }) {
  const [isCheck, setIsCheck] = useState(goal.checked);
  const [updateMode, setUpdateMod] = useState(false);
  const [updateInput, setUpdateInput] = useState("");

  // const updateToggle = () => {
  //   setUpdateMod(!updateMode); // 수정상태로 변경 // goals 상태 변경
  // };

  const isDone = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/goals/${goal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...goal,
        checked: !isCheck,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsCheck(!isCheck);
      }
    });
  };

  const goalDelete = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/goals/${goal.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("삭제완료");
        window.location.reload();
      }
    });
    if (goal.id === 0) {
      return null;
    }
  };

  const goalUpdate = () => {
    setUpdateMod(true);
    console.log(goal);
    console.log(updateInput);
  };

  const updateComplete = () => {
    fetch(`http://localhost:3001/goals/${goal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...goal,
        text: updateInput,
      }),
    }).then((res, e) => {
      if (res.ok) {
        setUpdateMod(false);
        alert("수정완료");
        window.location.reload();
      }
    });
  };

  return (
    <GoalTag>
      <ul>
        <li>
          <div className="check-list">
            <input type="checkbox" checked={isCheck} onChange={isDone}></input>

            {updateMode ? (
              <div>
                <input
                  value={updateInput}
                  onChange={(e) => setUpdateInput(e.target.value)}
                ></input>
                <button
                  className="edit-button"
                  onClick={updateComplete}
                ></button>
              </div>
            ) : (
              <div>{goal.text}</div>
            )}
          </div>
          <div className="delete-update">
            <i className="fa-sharp fa-solid fa-trash" onClick={goalDelete}></i>
            <i className="fa-sharp fa-solid fa-pen" onClick={goalUpdate}></i>
          </div>
        </li>
      </ul>
    </GoalTag>
  );
}
