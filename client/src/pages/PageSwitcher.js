import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class PageSwitcher extends Component {
  render(){
    return (
      <div className="PageSwitcher">
        <NavLink exact to="/" activeClassName="App__Aside-full"></NavLink>
        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
        <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
      </div>
    )
  }
}

export default PageSwitcher;