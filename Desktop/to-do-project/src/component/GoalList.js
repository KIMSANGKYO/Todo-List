import { useEffect, useState } from "react";
import styled from "styled-components";

const GoalTag = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  li {
    display: flex;
    border: 1px solid black;
    height: 100px;
    font-size: 50px;
    background-color: beige;
    align-items: center;
  }
  i {
    cursor: pointer;
  }
  .fa-trash {
    color: red;
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
            <input type="checkbox"></input>
            {updateMode ? (
              <input placeholder={goal.text}></input>
            ) : (
              <div>{goal.text}</div>
            )}
            <i
              onClick={() => {
                goalDelete(goal.id);
              }}
              className="fa-sharp fa-solid fa-trash"
            ></i>
            <i onClick={updateToggle} className="fa-sharp fa-solid fa-pen"></i>
          </li>
        ))}
      </ul>
    </GoalTag>
  );
}
