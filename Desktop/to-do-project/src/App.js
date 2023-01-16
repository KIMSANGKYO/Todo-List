import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Pigeon from "./component/Pigeon";
import MonthGoal from "./component/MonthGoal";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./component/Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header modal={modal} setModal={setModal} />
        <Routes>
          <Route exact path="/" element={<Pigeon />} />
          <Route path="/goal" element={<MonthGoal />} />
        </Routes>
        {modal === true ? <Modal modal={modal} setModal={setModal} /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
