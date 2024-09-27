import "./App.css";
import Homepage from "../Homepage";
import AboutLittleLemon from "../AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "../Contact";

function App() {
  function LogicalAndExample() {
    const val = prompt('Anything but a 0')
    
    return (
     <div>
      <h1>Please don't type in a zero</h1>
        {val &&    // AND && operator, on the left is the condition, on the right it's the code
      <h2>Yay, no 0 was typed in!</h2>
      }
     </div>
     )
  }

  //function LogInOutButton(props) {     // just here as an example
  //  const isLoggedIn = props.isLoggedIn;
  //  if (isLoggedIn) {
  //    return <LogoutButton />;
  //  } else {
  //    return <LoginButton />;
  //  }
  //}

  return (
    <div> 
      <LogicalAndExample />
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
      <Link to="/contact" classname="nav-item">Contact</Link>
	  </nav>
    <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element ={<Contact />}></Route>
    </Routes>
    </div>
  );
};

export default App;
