import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  const [fruits] = React.useState([  //useState : it could potentially have a name like useComponentData or useDynamicValue, useState is more concise and aligns with React’s existing vocabulary
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
    {fruitName: 'plum', id: 4}
  ]);
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
      </div>
    </div>
  );
}

export default App;
