import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.changePassword = this.changePassword.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  changePassword() {

  }

  saveChanges() {

  }

  render() {
    return (
      <div className="user-info-wrapper">
        <form>
          <div className="container">
            <div className="row">
              <div className="form-group col-md-4" id="user-info-image-wrapper">
                <img src={this.props.image} className="user-info-avatar" alt="Generic User Image" />
                <button type="submit" className="btn btn-success">Save Changes</button>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="userName">Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="John Doe" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="userEmail">Email</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="john.doe@example.com" />
                  </div>
                </div>
                <div className="form-group row col-md-12">
                  <label>Password</label>
                  <label id="user-info-password">***********</label>
                  <a><FontAwesomeIcon icon={faPencilAlt} /></a>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="newPassword">New Password</label>
                    <input type="password" className="form-control" id="newPassword" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
