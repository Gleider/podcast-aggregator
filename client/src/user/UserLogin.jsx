import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './User.css'
import Main from '../templates/Main'

const headerProps = {
  icon: 'user-circle',
  title: 'Login',
  subtitle: '',
  username: null,
  token: null
}

class SignInForm extends Component {

  constructor(){
    super();
    this.state = {
      user: headerProps.username,
      tkn: headerProps.token
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 

  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const data = {
      username,
      password
    }
    let formBody = [];
    for (let property in data) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('/oapi/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.username === 'user or password invalid'){

        headerProps.username = null
        headerProps.token = null
      }
      else{
        headerProps.token = responseData.token
        headerProps.username = responseData.username
        this.setState({user: headerProps.username, tkn: headerProps.token})
    
      }
       
    })
    .catch((error) => {
        console.log('problem while adding data', error);
    })
  }

  createForm(){
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          
        <div class="FormField">
            <label className="FormField__Label" htmlFor="username">Username</label>
            <input type="text" id="username" className="FormField__Input" placeholder="Enter your e-mail" name="username"/>
          </div>

          <div class="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
          </div>
          
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>
            <Link to="/sign-up" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    )

  }

  render() {
    //const {username, token} = this.state
    const username = headerProps.username
    const token = headerProps.token
    if(token === null){
      console.log(token)
      
      return (
        <Main {...headerProps}>
          
            {this.createForm()}
          
        </Main>
    
      )
    }
    else{
      
      headerProps.subtitle = `Hello ${username}`
      return (
        <Main {...headerProps}>
          <h1>logged</h1>
        </Main>
      )
    }
  }
}



export default SignInForm;
