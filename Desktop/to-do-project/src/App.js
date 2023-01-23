import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import MonthGoal from "./page/MonthGoal";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./component/Modal";
import MonthPage from "./page/MonthPage";
import MainPage from "./page/MainPage";
import Pigeon from "./page/Pigeon";

import TodoPage from "./page/TodoPage";
import MyInfoPage from "./page/MyInfoPage";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header modal={modal} setModal={setModal} />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/goal" element={<MonthGoal />} />
          <Route path="/month" element={<MonthPage />} />
          <Route path="/pigeon" element={<Pigeon />} />
          <Route path="/myinfo" element={<MyInfoPage />} />
        </Routes>
        {modal === true ? <Modal modal={modal} setModal={setModal} /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
