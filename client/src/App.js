import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AppForm from './pages/AppForm';
import AppAside from './pages/AppAside';
import PageSwitcher from './pages/PageSwitcher';
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
          {/* <NavLink exact to="/" activeClassName="App__Aside-full"></NavLink> */}
          <AppAside />
          
          <Route path="/sign-up" component={AppForm}></Route>
          <Route path="/sign-in" component={AppForm}></Route>
        </div>
      </Router>
    );
  }
}

export default App;