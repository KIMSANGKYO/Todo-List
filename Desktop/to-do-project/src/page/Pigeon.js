import { useState } from "react";
import styled from "styled-components";

const DoveZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  background: linear-gradient(45deg, violet, grey, skyblue, white);

  #dove1 {
    color: rgb(254, 149, 167);
  }
  #dove2 {
    color: rgb(105, 206, 249);
  }
  #dove3 {
    color: rgb(184, 249, 105);
  }
  #dove4 {
    color: rgb(249, 196, 105);
  }
  #dove5 {
    color: rgb(218, 105, 249);
  }
  #dove6 {
    color: rgb(90, 246, 165);
  }

  img {
    width: 100%;
    height: 700px;
  }
  i {
    margin-right: 30px;
  }
  .dove-container-1 > .fa-dove {
    animation-name: fly-cycle;
    animation-timing-function: linear;
    animation-duration: 3s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }
  .dove-container-1 {
    margin-bottom: 30px;
  }

  .dove-container-2 {
    transform: scaleX(-1);
  }
  .dove-container-2 > .fa-dove {
    animation-name: fly-cycle-2;
    animation-timing-function: linear;
    animation-duration: 3s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }

  @keyframes fly-cycle {
    0% {
      transform: scale(1) translateX(0vw);
    }
    20% {
      transform: scale(1) translateX(20vw) translateY(2vh);
    }
    40% {
      transform: scale(1) translateX(40vw) translateY(0vh);
    }
    60% {
      transform: scale(1) translateX(60vw) translateY(-2vh);
    }
    80% {
      transform: scale(1) translateX(50vw) translateY(0vh);
    }
    100% {
      transform: scale(1) translateX(80vw) translateY(0vh);
    }
  }

  @keyframes fly-cycle-2 {
    0% {
      transform: scale(1) translateX(0vw);
    }
    20% {
      transform: scale(1) translateX(20vw) translateY(2vh);
    }
    40% {
      transform: scale(1) translateX(40vw) translateY(0vh);
    }
    60% {
      transform: scale(1) translateX(60vw) translateY(-2vh);
    }
    80% {
      transform: scale(1) translateX(50vw) translateY(0vh);
    }
    100% {
      transform: scale(1) translateX(80vw) translateY(0vh);
    }
  }
`;

export default function Pigeon() {
  return (
    <DoveZone>
      <section>
        <div className="dove-container-1">
          <i id="dove1" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove2" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove3" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove4" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove5" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove6" className="fa-sharp fa-solid fa-dove fa-3x"></i>
        </div>
        <div className="dove-container-2">
          <i id="dove6" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove5" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove4" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove3" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove2" className="fa-sharp fa-solid fa-dove fa-3x"></i>
          <i id="dove1" className="fa-sharp fa-solid fa-dove fa-3x"></i>
        </div>
      </section>
      <img src="blackholedove.gif"></img>
    </DoveZone>
  );
}
// 비둘기 배경 hello dove
// 비둘기 날아가는 애니메이션효과
