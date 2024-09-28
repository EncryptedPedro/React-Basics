/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from './logo.svg';
import './App.css';
import precipitation from './actualassets/images/precipitation.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          width={300}
          src={logo} 
          className="App-logo" 
          alt="logo" />
        <img
          height={600}
          src={precipitation}
          alt="An image of how much it rains in Iberia"
        />
        <img 
          height={600}
          src={require('./actualassets/images/precipitation.png')}
          alt="An image of how much it rains in Iberia"
        />
      </header>
    </div>
  );
}

export default App;
