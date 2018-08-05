import './Nav.css'
import React from 'react';
import { Link } from 'react-router-dom'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Home
      </Link>
      <Link to="/users">
        <i className="fa fa-users"> Users</i>
      </Link>
      <Link to="/login">
        <i className="fa fa-user-circle"> Login</i>
      </Link>
      <Link to="/register">
        <i className="fa fa-user-plus"> Register</i>
        </Link>
    </nav>
  </aside>