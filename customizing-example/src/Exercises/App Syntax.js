import "./App.css";
import Card from "../components/Card";

function App() {
  function thirdExample() {
    console.log('third example');
  };
  const fourthExample = () => console.log('fourth example');

  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <button onClick={function() {console.log('first example')}}>
        An inline anonymous ES5 function event handler
      </button>
      <button onClick={() => console.log('second example')}>
        An inline anonymous ES6 function event handler
      </button>
      <div className="thirdExample">
        <button onClick={thirdExample}>
          using a separate function declaration
        </button>
      </div>
        <div className="fourthExample">
           <button onClick={fourthExample}>
               using a separate function expression
           </button>
       </div>
    </div>
  );
}

export default App;
