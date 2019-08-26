import React, {useState, useEffect} from 'react';
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
import Admin from './Components/Admin/Admin'

import axios from 'axios'

import { SimpleStateProvider } from 'use-simple-state';
//import { StateProvider } from './GlobalState.js';

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

//const fakeAuth = true


function App() {
  const [user, setUser] = useState({
    user: {},
    isAuth: false
  })
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  //Call auth api

  useEffect(() => {
    axios.get('http://localhost:4000/user/auth')
      .then(response => {
        setUser({
          user: response.data,
          isAuth: true
        });
        //console.log(response)
        setFetch({
          isLoading: false,
          isError: false,
          error: null
        })
      })
      .catch(function(error) {
        setUser({
          user: {},
          isAuth: false
        });
        setFetch({
          isLoading: false,
          isError: true,
          error: error
        })
        console.log(error);
      })
  }, [])

// const initialState = { isAuth: false, user: " "}
//
// const logIn = () => ({ type: 'LOG_IN' });
// const logOut = () => ({ type: 'LOG_OUT' });
//
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'LOG_IN':
//       return { isAuth: true, user: user };
//     case 'LOG_OUT':
//       return { isAuth : false, user: {}};
// }
// }
//console.log(initialState)

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        user.isAuth ? (
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

  return (

      <Router>
        <div style={centerBlock}>
          <Route path="/" component={Home} exact/>
          <Route path="/testing" component={Test}/>
          <Route path="/todos" component={Todo}/>
          <Route path="/author/:username" component={Profile}/>
          <PrivateRoute path="/article/:title" component={Article}/>
          <PrivateRoute path="/new" component={CreateArticle}/>
          <Route path="/admin" component={Admin}/>
        </div>
        <div style={centerBlockBlank}>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup}/>
        </div>
      </Router>

  );
}

export default App;
