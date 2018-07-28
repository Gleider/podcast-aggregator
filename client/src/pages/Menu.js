import React, { Component } from 'react'
import MenuConfig from './MenuConfig'
import logo from './images/logo.png';
class Menu extends Component {
    render() {
      let links = [
        { label: 'Home', link: '#home', active: true },
        { label: 'About', link: '#about' },
        { label: 'Portfolio', link: '#portfolio' },
        { label: 'Contact Us', link: '#contact-us' },
      ];
  
      return (
        <div className="container center">
          <MenuConfig links={links} logo={logo} />
        </div>
      );
    }
}

export default Menu;