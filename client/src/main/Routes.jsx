import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../home/Home'
import UserCrud from '../user/UserCrud'
import UserLogin from '../user/UserLogin'
import UserRegister from '../user/UserRegister'
export default props =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={UserCrud} />
    <Route path='/login' component={UserLogin} />
    <Route path='/register' component={UserRegister} />
    <Redirect from='*' to='/' />
  </Switch>