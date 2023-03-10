import { useRef, useState } from "react";
import { useActionData } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const InputLine = styled.div`
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

export default function InputBar({ goals }) {
  const [input, setInput] = useState("");
  const nextId = useRef(0);
  const goalAdd = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/goals/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body 에 보낼 때 json 파일로 변경
      body: JSON.stringify({
        id: nextId.current,
        text: input,
        checked: false,
      }),
    }).then((res) => {
      //응답이 성공하게 될 때 (response.ok)
      if (res.ok) {
        alert("생성 완료");
        nextId.current += 1;
        setInput("");
        window.location.reload();
      }
    });
  };

  return (
    <InputLine>
      <input
        placeholder="목표를 추가해주세요"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <i
        onClick={goalAdd}
        role="button"
        className="fa-sharp fa-solid fa-circle-plus fa-2x"
      ></i>
    </InputLine>
  );
}
