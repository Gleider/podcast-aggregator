import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
// import AppForm from './pages/AppForm';
// import AppAside from './pages/AppAside';
// import PageSwitcher from './pages/PageSwitcher';
import './pages/css/animateArrow.css';
//import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './main/Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from './templates/Logo'
import Nav from './templates/Nav'

import Footer from './templates/Footer'

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Logo />
          <Nav />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
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