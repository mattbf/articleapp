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
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive'

import axios from 'axios'

import useGlobal from './GlobalState/Store/Store';


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
const Example = () => (
  <div>
    <div>Device Test!</div>
    <MediaQuery minDeviceWidth={1224}>
      <div>You are a desktop or laptop</div>
      <MediaQuery minDeviceWidth={1824}>
        <div>You also have a huge screen</div>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <div>You are sized like a tablet or mobile phone though</div>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={700}>
      <div>700 query</div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery orientation="portrait">
      <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery orientation="landscape">
      <div>You are landscape</div>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      <div>You are retina</div>
    </MediaQuery>
  </div>
);
// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 })
//   return isMobile //? children : null
// }


function App() {
  //const isMobile = useMediaQuery({ maxWidth: 767 })
  
  const [globalState, globalActions] = useGlobal();
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  //Call auth api

  useEffect(() => {
    axios.get('http://localhost:4000/user/auth')
      .then(response => {
        globalActions.setUser(response.data)
        globalActions.LogInOut(true)
        console.log(response.data)
        setFetch({
          isLoading: false,
          isError: false,
          error: null
        })
      })
      .catch(function(error) {
        globalActions.LogInOut(false)
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
        globalState.isAuth ? (
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

const exampleuserobj = {
  username: "Matthew",
  createdAt: new Date(),
}
  return (

      <Router>
        <div style={centerBlock}>
          <Route path="/" component={Home} exact/>
          <Route path="/testing" component={Test}/>
          <Route path="/todos" component={Todo}/>
          <Route path="/author/:username" component={Profile}/>
          <Route path="/article/:title" component={Article}/>
          <Route path="/new" component={CreateArticle}/>
          <Route path="/admin" component={Admin}/>
        </div>
        <div style={centerBlockBlank}>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup}/>
        </div>
        <div> is Mobile?  </div>
        <Example/>
      </Router>

  );
}

export default App;

//{globalState.user.username}
