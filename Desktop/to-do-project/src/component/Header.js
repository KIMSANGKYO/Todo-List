import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ca9b52;
  p {
    font-weight: bold;
    font-size: 20px;
  }
  .fa-dove {
    font-size: 40px;
    color: skyblue;
    padding-left: 20px;
  }
`;

export default function Header({ modal, setModal }) {
  return (
    <Top>
      <Link to="/">
        <i className="fa-sharp fa-solid fa-dove fa-2x"></i>
      </Link>
      <p>My To-Do App</p>
      <Nav modal={modal} setModal={setModal} />
    </Top>
  );
}
// <div> 소제목바 변경 >> db 필요
// 해당 페이지아이디와 헤드의아이디가 같은 헤드.텍스트
