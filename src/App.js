import React from 'react';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Test from './Components/Test'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Article from './Components/Article'

const centerBlock = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  maxWidth: '1080px',
}

function App() {
  return (
    <Router>
      <div style={centerBlock}>
        <Route path="/" component={Home} exact/>
        <Route path="/testing" component={Test}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
        <Route path="/article/:title" component={Article}/>
      </div>
    </Router>
  );
}

export default App;
