import { Link } from "react-router-dom";
import styled from "styled-components";

const Modals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0px;
  right: 0px;
  width: 50vw;
  height: 100vh;
  background-color: beige;

  a {
    display: flex;
    width: 100%;
    height: 40px;
    margin: 10px;
    text-decoration: none;
    border: 1px solid black;
    border-collapse: collapse;
    align-items: center;
    justify-content: center;
    background-color: greenyellow;
  }
  i {
    position: relative;
    left: 10px;
    width: 100%;
    cursor: pointer;
  }
  i:hover {
    color: red;
  }
`;

export default function Modal({ modal, setModal }) {
  const modalOnclick = () => {
    setModal(!modal);
  };
  return (
    <Modals>
      <i
        onClick={modalOnclick}
        className="fa-sharp fa-solid fa-right-from-bracket fa-2x"
      ></i>

      <Link to="/goal">이달의 목표</Link>
      <Link to="/month">달력보기</Link>
      <Link to="/Pigeon">비둘기보기</Link>
      <Link to="/myinfo">개발자정보</Link>
    </Modals>
  );
}
