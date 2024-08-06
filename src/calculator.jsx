import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculator () {
    const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === "=") {
        if (input.trim() === '') {
            setResult('Error');
          } else {
            try {
              setResult(evaluate(input));
            } catch {
              setResult('Error');
            }
          }
    } else if (value === "C") {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };
    return(
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div style={{ marginTop: '10px', fontSize: '24px' }}>{result}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', maxWidth: '200px', margin: '20px auto' }}>
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((char) => (
          <button 
            key={char} 
            onClick={() => handleClick(char)} 
            style={{ padding: '20px', fontSize: '18px' }}>
            {char}
          </button>
        ))}
      </div>
    </div>
    );
}

export default Calculator;