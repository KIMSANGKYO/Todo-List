import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  .main_pigeon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: aquamarine;
    animation: pt 3s infinite;
  }

  @keyframes pt {
    25% {
      color: orange;
    }
    50% {
      color: pink;
    }
    75% {
      color: greenyellow;
    }
  }
  a {
    text-decoration: none;
  }
  img {
    width: 500px;
    height: 400px;
    border-radius: 30px;
  }
`;

export default function MainPage() {
  return (
    <Main>
      <h1>Today's To-Do List</h1>
      <Link to="/todo">
        <div className="main_pigeon">
          <p>Click me!</p>
          <img src="dovefly.gif" className="pigeon"></img>
        </div>
      </Link>
    </Main>
  );
}
