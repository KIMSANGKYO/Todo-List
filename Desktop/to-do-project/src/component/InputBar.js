import { useState } from "react";
import { useActionData } from "react-router-dom";
import styled from "styled-components";

const InputLine = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: greenyellow;

  input {
    width: 300px;
    height: 40px;
    margin: 20px;
  }
  i {
    cursor: pointer;
  }
`;

export default function InputBar({ onChange, value, onSubmit }) {
  return (
    <InputLine>
      <input
        placeholder="목표를 추가해주세요"
        onChange={onChange}
        value={value}
      ></input>
      <i
        onClick={onSubmit}
        role="button"
        className="fa-sharp fa-solid fa-circle-plus fa-2x"
      ></i>
    </InputLine>
  );
}
