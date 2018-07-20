import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';

//continue video on 22minutes
class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <a href="#" className="PageSwitcher__Item">Sign In</a>
              <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
            </div>
            
            <div className="FormTitle">
              <Link to="/sign-in" className="FormTitle__Link">Sign In</Link> or 
              <Link to="/" className="FormTitle__Link">Sign Up</Link>
            </div>

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;