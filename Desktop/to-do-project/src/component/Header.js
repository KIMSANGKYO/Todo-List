import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Top = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  font-size: 20px;
  background-color: pink;
`;

export default function Header({ modal, setModal }) {
  return (
    <Top>
      <img src="../img/pigeon.png" alt="image" />
      <div>오늘 해야 할 일은 ?</div>
      <Link to="/">돌아가기</Link>
      <Nav modal={modal} setModal={setModal} />
    </Top>
  );
}
