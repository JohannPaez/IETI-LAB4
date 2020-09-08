import React from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SidebarPage from './components/SidebarPage';

function App() {
  const LoginView = () => (
    <Login/>
  );
  return (
          <Router>
              <div className="App">
                  <br></br>
                  <br/>
                  <div>
                      <Route exact path="/" component={localStorage.getItem('isLoggedIn') ? SidebarPage: LoginView}/>
                      <Route exact path="/home" component={localStorage.getItem('isLoggedIn') ? SidebarPage : LoginView}/>
                  </div>
              </div>
          </Router>
  );
}

export default App;
