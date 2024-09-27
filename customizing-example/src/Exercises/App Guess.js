function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() *3)+1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, your guess: ${userInput}`);
  }
  var nightMode=true;
  function toggleNightMode() {
    nightMode=!nightMode;
    if (nightMode===true) {
      <h1 style={{backgroundColor: "black"}}>TEST</h1>
    }
    else {
      <h1 style={{backgroundColor: "white"}}>TEST</h1>
    }
  }

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>
        Guess the number between 1 and 3
      </button>
      <div>
        <button onClick={toggleNightMode}>
          Toggle Dark mode
        </button>
      </div>
    </div>
  );
}

export default App;
