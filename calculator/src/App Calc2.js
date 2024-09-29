import React, { useState, useRef, useCallback } from "react";

const buttonStyle = {
  fontSize: '20px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid gray',
  backgroundColor: 'whitesmoke',
  marginRight: '5px',
};

const resetButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'tomato',
  color: 'white',
};

export default function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const clearAndFocusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, []);

  function performOperation(e, operation) {
    e.preventDefault();
    const inputValue = Number(inputRef.current?.value || 0);
    setResult(prevResult => operation(prevResult, inputValue));
    clearAndFocusInput();
  }

  function plus(e) {
    performOperation(e, (a, b) => a + b);
  }

  function minus(e) {
    performOperation(e, (a, b) => a - b);
  }

  function times(e) {
    performOperation(e, (a, b) => a * b);
  }

  function divide(e) {
    performOperation(e, (a, b) => b !== 0 ? a / b : a);
  }

  function resetInput(e) {
    e.preventDefault();
    clearAndFocusInput();
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    clearAndFocusInput();
  }

  return (
    <div>
      <div>
        <h1>Simplest Working Calculator</h1>
        <form>
          <p
            style={{fontSize: '20px', fontWeight: 'semibold'}}
          >
            {result}
          </p>
          <input
            ref={inputRef}
            type="number"
            placeholder="Type a number"
            style={{ fontSize: '20px', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}
          />
          <div>
            <button onClick={plus} style={buttonStyle}>add</button>
            <button onClick={minus} style={buttonStyle}>subtract</button>
            <button onClick={times} style={buttonStyle}>multiply</button>
            <button onClick={divide} style={buttonStyle}>divide</button>
            <button onClick={resetInput} style={resetButtonStyle}>reset input</button>
            <button onClick={resetResult} style={resetButtonStyle}>reset result</button>
          </div>
        </form>
      </div>
    </div>
  )
}