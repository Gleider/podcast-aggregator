import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import AnimationArrow from './AnimateArrow';
import PageSwitcher from './PageSwitcher';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import FormTitle from './FormTitle';

class AppForm extends Component {
  render(){
    return (
      <div className="App__Form">
        <Route path="/" component={AnimationArrow}></Route>
        <PageSwitcher />

        <FormTitle />
        <Route path="/sign-up" component={SignUpForm}></Route>
        <Route path="/sign-in" component={SignInForm}></Route>

      </div>
    )
  }
}

export default AppForm;