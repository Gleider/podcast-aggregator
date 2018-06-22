import React from 'react';
import Subscription from './Subscription';

export default class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.cancelSubscription = this.cancelSubscription.bind(this);
    this.state = {
      subscriptions: props.subscriptions
    };
  }

  cancelSubscription(id) {
    this.setState(prevState => ({
      subscriptions: prevState.subscriptions.filter(
        subscription => subscription.id !== id
      )
    }));
  }

  render() {
    return (
      <div className="subscriptions">
        {this.props.onUserPage && <h2>Subscriptions</h2>}
        {this.state.subscriptions.map(
          (sub, index) => (
            <Subscription 
                key={index}
                id={sub.id}
                title={sub.title}
                image={sub.image}
                onUserPage={this.props.onUserPage}
                cancelSubscription={this.cancelSubscription}
            />
          )
        )}
      </div>
    );
  }
}
