import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Nav({ modal, setModal }) {
  const modalOnclick = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={modalOnclick}>네비게이션 입니다</button>
    </div>
  );
}
