import React, {Component} from 'react'
import { Route } from 'react-router-dom';
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