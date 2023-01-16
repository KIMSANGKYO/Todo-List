import { Link } from "react-router-dom";
import styled from "styled-components";

const Modals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: fixed;
  top: 0px;
  right: 0px;
  width: 50vw;
  height: 100vh;
  background-color: yellow;
`;

export default function Modal({ modal, setModal }) {
  const modalOnclick = () => {
    setModal(!modal);
  };
  return (
    <Modals>
      <button onClick={modalOnclick}>닫기</button>
      <Link to="/goal">이달의 목표</Link>
    </Modals>
  );
}
