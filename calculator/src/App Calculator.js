import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
  const [input, setInput] = useState(0);
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));  
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0;
    setInput((input) => 0);
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
  	setResult((result) => result = 0);
  }; 

  function seven(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "7");
    inputRef.current.value = input;
  }
  function eight(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "8");
    inputRef.current.value = input;
  }
  function nine(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "9");
    inputRef.current.value = input;
  }
  function four(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "4");
    inputRef.current.value = input;
  }
  function five(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "5");
    inputRef.current.value = input;
  }
  function six(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "6");
    inputRef.current.value = input;
  }
  function one(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "1");
    inputRef.current.value = input;
  }
  function two(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "2");
    inputRef.current.value = input;
  }
  function three(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "3");
    inputRef.current.value = input;
  }
  function zero(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + "0");
    inputRef.current.value = input;
  }
  function dot(e){
    e.preventDefault();
    setInput((input) => Number(inputRef.current.value) + ".");
    inputRef.current.value = input;
  }
  function equal(e){
    e.preventDefault();
    setResult((result) => result);
  }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Result: {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <div className="calcButtons">
          <button onClick={seven}>7</button>
          <button onClick={eight}>8</button>
          <button onClick={nine}>9</button>
          <button onClick={times}>x</button> 
        </div>
        <div className="calcButtons">
          <button onClick={four}>4</button>
          <button onClick={five}>5</button>
          <button onClick={six}>6</button>
          <button onClick={minus}>-</button> 
        </div>
        <div className="calcButtons">
          <button onClick={one}>1</button>
          <button onClick={two}>2</button>
          <button onClick={three}>3</button>
          <button onClick={plus}>+</button> 
        </div>
        <div className="calcButtons">
          <button onClick={dot}>.</button>
          <button onClick={zero}>0</button>
          <button onClick={equal}>=</button>
          <button onClick={divide}>/</button> 
        </div>
        <br/>
        <div className="extraButtons">
          <button onClick={plus}>add</button> 
          <button onClick={minus}>subtract</button> 
          <button onClick={resetInput}>Reset Input</button>  
        </div>
        <div className="extraButtons"> 
          <button onClick={times}>multiply</button> 
          <button onClick={divide}>divide</button> 
          <button onClick={resetResult}>Reset Result</button> 
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
