import React, { Component } from 'react'

class SignUpForm extends Component {
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div class="FormField">
            <label className="FormField_Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
          </div>
          <div class="FormField">
            <label className="FormField_Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
          </div>
          <div class="FormField">
            <label className="FormField_Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your e-mail" name="email"/>
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField_Checkbox" type="checkbox" name="hasAgreed"/>I agree all statements in <a href="" className="FormField__TermsLink">Terms of service</a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <a href="#" className="FormField__Link">I'm already member</a>
          </div>
        </form>
      </div>
    );
  }

}

export default SignUpForm;
