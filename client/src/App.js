import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AppForm from './pages/AppForm';
import AppAside from './pages/AppAside';
import './pages/css/animateArrow.css';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <Router>
        <div className="App">
          <AppAside />

          <AppForm />
        </div>
      </Router>
    );
  }
}

export default App;