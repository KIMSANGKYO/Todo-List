import { useState } from "react";
import { useActionData } from "react-router-dom";
import styled from "styled-components";

const InputLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: yellowgreen;
  height: 50px;
  width: 100%;
  > input {
    height: 30px;
    width: 200px;
    margin-right: 20px;
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
