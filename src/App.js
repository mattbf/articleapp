import React from 'react';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Test from './Components/Test'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Article from './Components/Article'
import CreateArticle from './Components/CreateArticle'
import Profile from './Components/Profile'
import Todo from './Components/Todo'

const centerBlock = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  maxWidth: '1080px',
  backgroundColor: '#F7F9FD',
  paddingBottom: '8px'
}

const centerBlockBlank = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  maxWidth: '1080px',
}

const fakeAuth = true
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <div style={centerBlock}>
        <Route path="/" component={Home} exact/>
        <Route path="/testing" component={Test}/>
        <Route path="/todos" component={Todo}/>
        <Route path="/author/:username" component={Profile}/>
        <PrivateRoute path="/article/:title" component={Article}/>
        <PrivateRoute path="/new" component={CreateArticle}/>
      </div>
      <div style={centerBlockBlank}>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
      </div>
    </Router>
  );
}

export default App;
