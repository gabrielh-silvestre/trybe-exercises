import { useState } from 'react';

import useArray from './hooks/useArray';

import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const { myArray } = useArray();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    myArray.addItem(newTask);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target: { value } }) => setNewTask(value)}
        />
        <button type="submit">Criar</button>
      </form>

      <ol>
        {myArray.array.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => myArray.removeItem(item)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
