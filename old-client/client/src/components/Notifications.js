import React from 'react';
import Notification from './Notification';

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
    this.listenTo = this.listenTo.bind(this);

    this.state = {
      notifications: props.notifications
    };
  }

  dismiss(id) {
    this.setState(prevState => ({
      notifications: prevState.notifications.filter(
        notification => notification.id !== id
      )
    }));
  }

  listenTo(id) {

  }

  render() {
    return (
      <div className="container">
        <h2 style={{marginTop: '40px'}}>Notifications</h2>
        <table class="table">
          <thead>
            <tr><th>Podcast</th><th>Episode</th><th></th></tr>
          </thead>
          <tbody>
            {this.state.notifications.map(
              (not, index) => (
                <Notification 
                  key={index}
                  id={not.id}
                  title={not.title}
                  episode={not.episode}
                  dismiss={this.dismiss}
                  listenTo={this.listenTo} />
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
