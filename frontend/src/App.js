import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 初次載入時獲取所有Todo
  useEffect(() => {
    axios.get('http://localhost:8080/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  // 新增Todo
  const addTodo = () => {
    if (input.trim()) {
      axios.post('http://localhost:8080/api/todos', { task: input })
        .then(response => {
          setTodos([...todos, response.data]);
          setInput('');
        })
        .catch(error => console.error('Error adding todo:', error));
    }
  };
  // 舊新增Todo 
  // const addTodo = () => {
  //   if (input.trim()) {
  //     setTodos([...todos, input]);
  //     setInput('');
  //   }
  // };

  // 刪除Todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/api/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(error => console.error('Error deleting todo:', error));
  };
  // const deleteTodo = (index) => {
  //   setTodos(todos.filter((_, i) => i !== index));
  // };

  return (
    <div className="App">
      <h1>待辦事項管理系統</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="輸入待辦事項"
        />
        <button onClick={addTodo}>新增</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task} <button onClick={() => deleteTodo(todo.id)}>刪除</button>
          </li>
        ))}
        {/* {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>刪除</button>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;