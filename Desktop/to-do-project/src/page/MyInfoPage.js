import { useState } from "react";
import styled from "styled-components";

const MyInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, Violet, Orange);
  > img {
    width: 400px;
    height: 400px;
  }

  .modal-container {
    display: flex;
    width: 800px;
    justify-content: space-around;

    margin-top: 50px;
  }
  .modal-container > div {
    border-radius: 20px;
    display: flex;
    width: 200px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: linear-gradient(to top, beige, yellow);
    text-align: center;
  }
  ul {
    list-style: none;
    border: 1px solid black;
    border-radius: 20px;
    padding: 0;
    width: 400px;
    background-color: rgb(246, 174, 66);
  }
  li {
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    border: 1px solid black;
    margin: 10px;
    text-align: center;
    background-color: beige;
  }
  .mypic {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mypic > img {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h3 ~ a {
    padding: 10px;
  }
`;

export default function MyInfoPage() {
  const [stackModal, setStackModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [goalModal, setGoalModal] = useState(false);

  const ModalHandler = () => {
    setStackModal(true);
    setTimeout(() => {
      setProjectModal(true);
    }, 1500);
    setTimeout(() => {
      setGoalModal(true);
    }, 3000);
  };

  return (
    <MyInfo>
      <div className="modal-container">
        {stackModal === false ? null : (
          <div>
            <h3>-Stack-</h3>
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"></img>
            <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
            <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white"></img>
            <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"></img>
            <img src="https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styled-components&logoColor=white"></img>
            <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></img>
          </div>
        )}
        {projectModal === false ? null : (
          <div>
            <h3>-Project-</h3>
            <a href="https://github.com/codestates-fairyCompany/FairyPage">
              Fairy Page
            </a>
            <a href="https://github.com/KIMSANGKYO/VocaPractice">
              Voca Practice
            </a>
            <a href="https://github.com/KIMSANGKYO/Food-Order">Food Order</a>
          </div>
        )}
        {goalModal === false ? null : (
          <div>
            <h3>My Goal</h3>
            <p>
              계속 성장하는
              <br /> 개발자가 되자!
            </p>
          </div>
        )}
      </div>
      <div className="mypic">
        <p>Click me!</p>
        <i class="fa-solid fa-arrow-down"></i>
        <img onClick={ModalHandler} src="kyo.png"></img>
      </div>
      <ul>
        <li>
          <i class="fa-brands fa-github"> </i>
          <a href="https://github.com/KIMSANGKYO">깃허브 바로가기</a>
        </li>
        <li>
          <i class="fa-solid fa-b"></i>
          <a href="https://codekyo.tistory.com/">블로그 바로가기</a>
        </li>
        <li>
          <i class="fa-solid fa-people-group"></i>
          <a href="https://www.notion.so/codestates/be3bd143e6a5463eae080c37364a7afd">
            코딩요정 스터디
          </a>
        </li>
      </ul>
    </MyInfo>
  );
}

// 이미지 클릭시에 <div> 생성
// 사용 스택 // 다른 프로젝트 연결 // 나의 목표
// github blog study 정보 li 라인
