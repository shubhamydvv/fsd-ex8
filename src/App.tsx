import { useState } from 'react';
import './App.css';

// Component to be tested
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-component">
      <h2 data-testid="count-display">Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)} data-testid="increment-btn">Increment</button>
      <button onClick={() => setCount(c => c - 1)} data-testid="decrement-btn">Decrement</button>
    </div>
  );
};

function App() {
  return (
    <div className="testing-lab">
      <h1>Experiment 7: Testing and QA</h1>
      <p>Implementation of testable components and unit test structures.</p>
      
      <div className="test-area">
        <h3>Component Under Test</h3>
        <Counter />
      </div>

      <div className="test-docs">
        <h3>Test Example (App.test.tsx)</h3>
        <pre>
{`import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './App';

test('increments counter on button click', () => {
  render(<Counter />);
  const btn = screen.getByTestId('increment-btn');
  const display = screen.getByTestId('count-display');
  
  fireEvent.click(btn);
  expect(display.textContent).toBe('Count: 1');
});`}
        </pre>
      </div>
    </div>
  );
}

export default App;
