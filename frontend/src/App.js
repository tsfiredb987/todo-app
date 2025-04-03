import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

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
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;