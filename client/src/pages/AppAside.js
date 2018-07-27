import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Menu from './Menu';

class AppAside extends Component {
  render(){
    return (
        <div className="App__Aside">
          <Route path='/' component={Menu}></Route>
      </div>
    )
  }
}

export default AppAside;