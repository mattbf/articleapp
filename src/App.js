import React from 'react';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/Home'
import Test from './Components/Test'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </div>
    </Router>
  );
}

export default App;
