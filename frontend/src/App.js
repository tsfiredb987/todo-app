import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); // 待辦事項陣列
  const [input, setInput] = useState(''); // 輸入框內容

  const addTodo = () => {
    if (input.trim()) { // 避免空輸入
      setTodos([...todos, input]);
      setInput('');
    }
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
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;