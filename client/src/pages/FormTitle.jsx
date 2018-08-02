import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

export default () => (
      <div className="FormTitle">
        <NavLink exact to="/" activeClassName="App__Aside-full"></NavLink>
          <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
          <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
      </div>
    )


