// Module imports
import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom'
import axios from 'axios';

// Styling
import './App.css';
import {Button} from 'reactstrap';

// Component imports
import Home from './components/Home.js';
import Login from './components/auth/login.js';
import Signup from './components/auth/signup.js';
import Users from './components/users/userlist.js';

// Setting axios defaults
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.interceptors.request.use(options => {
    options.headers.authorization = localStorage.token;
    return options 
}, err => {
    return Promise.reject(err);
})


function App(props) {
  const logout = event => {
    event.preventDefault();
    localStorage.removeItem('token');
    props.history.push('/login')
  }
  return (
    <div className="App">
      <header>
      <h1>Hi, Welcome to the William H. Macy's Macy's Department Store Employee Server!</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/signup">Sign Up!</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/login">Log In!</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/userlist">List of Users!</NavLink>
      </nav>
      </header>
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/userlist' component={Users}/>
      </main>
      <footer>
        <Button color="primary" onClick={logout}>Logout</Button>
      </footer>
    </div>
  );
}

export default withRouter(App);
