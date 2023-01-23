import styled from "styled-components";

const TodoTag = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  li {
    display: flex;
    border: 1px solid black;
    height: 100px;
    font-size: 50px;
    background-color: beige;
    align-items: center;
    justify-content: space-between;
  }
  i {
    cursor: pointer;
  }
  .check-name {
    display: flex;
    margin-left: 20px;
  }
  .delete-update {
    display: flex;
    margin-right: 50px;
    width: 150px;
    justify-content: space-between;
  }
  .fa-trash {
    color: red;
  }
`;

export default function TodoList({ todos, setTodos, todoDelete }) {
  return (
    <TodoTag>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="check-name">
              <input type="checkbox"></input>
              <div>{todo.text}</div>
            </div>
            <div className="delete-update">
              <i
                onClick={() => {
                  todoDelete(todo.id);
                }}
                className="fa-sharp fa-solid fa-trash"
              ></i>
              <i className="fa-sharp fa-solid fa-pen"></i>
            </div>
          </li>
        ))}
      </ul>
    </TodoTag>
  );
}
