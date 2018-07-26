import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AppForm from './pages/AppForm';
import './pages/css/animateArrow.css'
import Menu from './pages/Menu';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <Route path='/' component={Menu}></Route>

          </div>
          
          <AppForm />
        </div>
      </Router>
    );
  }
}

export default App;