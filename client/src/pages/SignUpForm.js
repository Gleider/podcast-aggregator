import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class SignUpForm extends Component {
  constructor(){
    super();
    this.state = {
      info: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const name = e.target.name.value;
    const email = e.target.email.value
    const data = {
      username,
      email,
      name,
      password,
      confirmPassword
    }
    let formBody = [];
    for (let property in data) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('/oapi/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.log("Response:",responseData);
    })
    .catch((error) => {
        console.log('problem while adding data', error);
    })
  }
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div class="FormField">
            <label className="FormField_Label" htmlFor="username">Username</label>
            <input type="username" id="username" className="FormField__Input" placeholder="Enter your username" name="username"/>
          </div>
          <div class="FormField">
            <label className="FormField_Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
          </div>
          <div class="FormField">
            <label className="FormField_Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your e-mail" name="email"/>
          </div>
          <div class="FormField">
            <label className="FormField_Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
          </div>
          <div class="FormField">
            <label className="FormField_Label" htmlFor="confirmPassword">Repeat password</label>
            <input type="password" id="confirmPassword" className="FormField__Input" placeholder="Repeat your password" name="confirmPassword"/>
          </div>
          

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField_Checkbox" type="checkbox" name="hasAgreed"/>I agree all statements in <a href="" className="FormField__TermsLink">Terms of service</a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
          </div>
        </form>
      </div>
    );
  }

}

export default SignUpForm;
