import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Pigeon() {
  return (
    <Main>
      <div>
        <img src="pigeon.png" className="pigeon"></img>
      </div>
    </Main>
  );
}
