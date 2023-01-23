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
  background-color: pink;
  padding-left: 10px;
  padding-right: 10px;

  img {
    width: 50px;
  }

  i {
    font-size: 30px;
    color: skyblue;
  }
`;

export default function Header({ modal, setModal }) {
  const [heads, setHeads] = useState([
    { id: 1, text: "오늘 해야 할 일은?" },
    { id: 2, text: "이 달의 목표는?" },
    { id: 3, text: "달력" },
    { id: 4, text: "비둘기" },
    { id: 5, text: "개발자 정보" },
  ]);
  return (
    <Top>
      <Link to="/">
        <i className="fa-sharp fa-solid fa-dove"></i>
      </Link>
      <div>Head</div>

      <Nav modal={modal} setModal={setModal} />
    </Top>
  );
}
// <div> 소제목바 변경 >> db 필요
// 해당 페이지아이디와 헤드의아이디가 같은 헤드.텍스트
