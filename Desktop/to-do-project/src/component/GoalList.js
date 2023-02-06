import { useEffect, useState } from "react";
import styled from "styled-components";

const GoalTag = styled.div`
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
  .check-list {
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

export default function GoalList({ goals, goalDelete, setGoals }) {
  const [updateMode, setUpdateMod] = useState(false);

  const updateToggle = () => {
    setUpdateMod(!updateMode); // 수정상태로 변경 // goals 상태 변경
  };
  const goalUpdate = (text) => {
    setGoals((goals) => goals.map((goal) => (goal.text = text)));
  };

  return (
    <GoalTag>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <div className="check-list">
              <input type="checkbox"></input>
              {updateMode ? (
                <input placeholder={goal.text}></input>
              ) : (
                <div>{goal.text}</div>
              )}
            </div>
            <div className="delete-update">
              <i
                onClick={() => {
                  goalDelete(goal.id);
                }}
                className="fa-sharp fa-solid fa-trash"
              ></i>
              <i
                onClick={updateToggle}
                className="fa-sharp fa-solid fa-pen"
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </GoalTag>
  );
}
