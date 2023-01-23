import { useRef, useState } from "react";
import GoalList from "../component/GoalList";
import InputBar from "../component/InputBar";

export default function MonthGoal() {
  const [value, setValue] = useState("");
  const [goals, setGoals] = useState([
    { id: 1, text: "일찍일어나기", checked: false },
    { id: 2, text: "운동하기", checked: false },
    { id: 3, text: "메서드공부하기", checked: false },
  ]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    goalAdd(value);
    setValue("");
  };

  //추가 함수
  const goalAdd = (text) => {
    if (text === "") {
      return alert("목표를 입력해주세요");
    } else {
      const newGoal = {
        id: goals.length + 1,
        text,
        checked: false,
      };
      setGoals((goals) => [...goals, newGoal]);
    }
  };
  //삭제 함수
  const goalDelete = (id) => {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  };
  // 수정 함수

  // 수정버튼 누를 때 작성모드로 변경 후 한번 더 누르면
  // input 값으로 goal.text 상태 변경

  return (
    <div>
      <InputBar
        goalAdd={goalAdd}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <GoalList goals={goals} goalDelete={goalDelete} setGoals={setGoals} />
    </div>
  );
}

// 체크상태
// 수정가능 상태
// 리스트 추가 기능 ㅇ
