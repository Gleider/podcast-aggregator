import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignInForm extends Component {

  constructor(){
    super();
    this.state = {
      info: []
    }
  }
  componentDidMount(){
    fetch('/oapi/db')
      .then(res => res.json())
      .then(info => this.setState({ info }, () => console.log(info)))

  }
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          
        <div class="FormField">
            <label className="FormField_Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your e-mail" name="email"/>
          </div>

          <div class="FormField">
            <label className="FormField_Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
          </div>
          
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>
            <Link to="/" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }

}

export default SignInForm;
