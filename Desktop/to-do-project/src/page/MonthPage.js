import { useState } from "react";
import styled from "styled-components";

const Month = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: cadetblue;
  /* overflow: hidden; */
  height: 100%;

  .box {
    display: inline-block;
    height: 200px;
    width: 33.3%;

    position: relative;
    /*margin:0 -4px -5px -2px;*/
    transition: all 0.2s ease;
  }

  .loader5 {
    position: relative;
    width: 200px;
    height: 50px;
    top: 45%;
    top: -webkit-calc(50% - 10px);
    top: calc(50% - 10px);
    left: 25%;
    left: -webkit-calc(50% - 75px);
    left: calc(50% - 75px);

    background-color: rgba(255, 255, 255, 0.2);
  }

  .loader5:after {
    display: flex;
    align-items: center;
    justify-content: center;
    content: "LOADING ...";
    color: black;

    font-family: Lato, "Helvetica Neue";
    font-weight: bold;
    font-size: 16px;
    position: absolute;
    width: 100%;
    height: 50px;
    line-height: 20px;
    left: 0;
    top: 0;
  }

  .loader5:before {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 0px;
    height: 50px;
    width: 0px;
    z-index: 0;
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    -webkit-animation: loader5 7s ease-in-out infinite;
    animation: loader5 7s ease-in-out infinite;
  }

  @-webkit-keyframes loader5 {
    0% {
      width: 0px;
      left: 0px;
    }
    48% {
      width: 100%;
      left: 0px;
    }
    50% {
      width: 100%;
      right: 0px;
    }
    52% {
      width: 100%;
      right: 0px;
    }
    100% {
      width: 0px;
      right: 0px;
    }
  }

  @keyframes loader5 {
    0% {
      width: 0px;
      left: 0px;
    }
    48% {
      width: 100%;
      left: 0px;
    }
    50% {
      width: 100%;
      right: 0px;
    }
    52% {
      width: 100%;
      right: 0px;
    }
    100% {
      width: 0px;
      right: 0px;
    }
  }
`;

export default function MonthPage() {
  const [dot, setDot] = useState(".");

  const dotAdd = () => {
    setTimeout(() => setDot(dot.repeat(3)), 1000);
  };

  return (
    <Month>
      <h2>준비 중입니다.</h2>
      <div class="box">
        <div class="loader5"></div>
      </div>
    </Month>
  );
}
