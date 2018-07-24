import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './pages/css/animateArrow.css'
import Menu from './pages/Menu';
import AnimationArrow from './pages/AnimateArrow';
import './App.css';
  //TRYING MAKE WORK THE ANIMATION ARROW AND USE THIS TUTORIAL TO FINISHER: https://www.youtube.com/watch?time_continue=48&v=IGz4BI-aO_8
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
          
          <div className="App__Form">
          <Route path="/" component={AnimationArrow}></Route>
            <div className="PageSwitcher">
              
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
            
            <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
              <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>

            
            
            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;