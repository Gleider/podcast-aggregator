import React from 'react';
import UserInfo from './UserInfo';
import Notifications from './Notifications';
import Subscriptions from './Subscriptions';

export default class UserInfoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row" id="user-info-page-wrapper">
          <div className="col-md-9">
            <UserInfo image={this.props.image} />
            <Notifications notifications={this.props.data} />
          </div>
          <div className="col-md-3">
            <Subscriptions onUserPage={true} subscriptions={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}
