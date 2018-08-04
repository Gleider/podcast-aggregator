import './Logo.css'
import logo from '../pages/images/logo.png'
import React from 'react'

export default props =>
  <aside className="logo">
    <a href='/' clasName="logo">
      <img src={logo} alt="logo"/>
    </a>
  </aside>