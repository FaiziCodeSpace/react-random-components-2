import './App.css';
import { useState } from 'react';
import Table from './compliment/array';
import Routine from './compliment/checkbox';
import Forming from './compliment/form';
import Info from './compliment/information';
import RuntimeLoader from './compliment/input';
import Boards from './compliment/output';
import Props from './compliment/props';
import GenderProcess from './compliment/radio';
import Counter from './compliment/toggleBtn';
import Users from './compliment/user';


const components = {
    Table,
    Routine,
    Forming,
    Info,
    RuntimeLoader,
    Boards,
    GenderProcess,
    Counter
};

function getRandomComponentKey() {
  const keys = Object.keys(components);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

function App() {
  const [selected, setSelected] = useState(getRandomComponentKey());

  const ComponentToRender = components[selected];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Practice Components</h1>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {Object.keys(components).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>

        <button onClick={() => setSelected(getRandomComponentKey())}>
          🎲 Random Component
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {ComponentToRender ? (
          <ComponentToRender />
        ) : (
          <p>Component not found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
