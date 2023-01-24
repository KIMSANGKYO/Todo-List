import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 20px;
  background: linear-gradient(to bottom, violet, pink);
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  font-family: Arial, Helvetica, sans-serif;

  img {
    width: 50px;
  }

  i {
    font-size: 30px;
    color: rgb(45, 182, 236);
  }
`;

export default function Header({ modal, setModal }) {
  return (
    <Top>
      <Link to="/">
        <i className="fa-sharp fa-solid fa-dove"></i>
      </Link>
      <h2>My To-Do App</h2>

      <Nav modal={modal} setModal={setModal} />
    </Top>
  );
}
// <div> 소제목바 변경 >> db 필요
// 해당 페이지아이디와 헤드의아이디가 같은 헤드.텍스트
