import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
// import AppForm from './pages/AppForm';
// import AppAside from './pages/AppAside';
// import PageSwitcher from './pages/PageSwitcher';
import './pages/css/animateArrow.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from './templates/Logo'
import Nav from './templates/Nav'
import Main from './templates/Main'
import Footer from './templates/Footer'

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Home" subtitle="home page"/>
        <Footer />
      </div>

      // <Router>
      //   <div className="App">
      //     {/* <NavLink exact to="/" activeClassName="App__Aside-full"></NavLink> */}
      //     <AppAside />
          
      //     <Route path="/sign-up" component={AppForm}></Route>
      //     <Route path="/sign-in" component={AppForm}></Route>
      //   </div>
      // </Router>
    )
  }
}

export default App;