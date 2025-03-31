import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// 在 index.js 引入 css 樣式。
import 'bootstrap/dist/css/bootstrap.min.css';
// 如果要撰寫 SASS 的話，可透過以下方式引入 SASS 樣式。
// @import "~bootstrap/scss/bootstrap";
import { Navbar, Container, FormControl, InputGroup, Button } from 'react-bootstrap';

function Trash() {
  return <></>
}

function fetchTodos() {
  return [
    {
      id: 1,
      title: "吃飯",
      completed: false,
    },
    {
      id: 2,
      title: "刷牙",
      completed: false,
    },
    {
      id: 3,
      title: "喝水",
      completed: true,
    },
  ];
}

function TodoItem(props) {
  return (
    <InputGroup key={props.id}>
      <InputGroup.Checkbox checked={props.completed} />
      <FormControl
        value={props.title}
        style={{
          textDecoration: props.completed ? "line-through 4px" : "none",
        }}
      />
        {/* <input type='checkbox'defaultChecked={todo.completed} />
        <label>{todo.title}</label> */}
        <Button variant='outline-danger' onClick={props.onDelete}>
          <Trash />
        </Button>
    </InputGroup>
  )
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="..\img\shark.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>    
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={() => {
              setTodos(todos.filter((x) => x.id !== todo.id));
            }}     
            onToggle={() => {
              setTodos(
                todos.map((x) => 
                  x.id === todo.id ? { ...x, completed: !x.completed } : x
                )
              )
            }}       
          />
        ))}
      </Container>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
