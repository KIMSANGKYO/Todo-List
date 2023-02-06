import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";

const NavIcon = styled.div`
  .fa-bars {
    color: black;
    cursor: pointer;
    font-size: 50px;
    padding-right: 20px;
  }
`;
export default function Nav({ modal, setModal }) {
  const modalOnclick = () => {
    setModal(!modal);
  };

  return (
    <NavIcon>
      <i onClick={modalOnclick} className="fa-sharp fa-solid fa-bars"></i>
    </NavIcon>
  );
}
