import React from 'react';
import Subscription from './Subscription';
import UnsubscribeModal from './UnsubscribeModal';

export default class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.cancelSubscription = this.cancelSubscription.bind(this);
    this.setSelectedSubscription = this.setSelectedSubscription.bind(this);
    this.clearSelectedSubscription = this.clearSelectedSubscription.bind(this);
    this.state = {
      subscriptions: props.subscriptions,
      selectedSubscription: undefined
    };
  }

  cancelSubscription() {
    this.setState(prevState => ({
      subscriptions: prevState.subscriptions.filter(
        subscription => subscription.id !== this.state.selectedSubscription.id
      ),
      selectedSubscription: undefined
    }));
  }

  setSelectedSubscription(id) {
    this.setState(prevState => ({
      selectedSubscription: prevState.subscriptions.find(
        subscription => subscription.id === id
      )
    }));
  }

  clearSelectedSubscription() {
    this.setState(prevState => ({
      selectedSubscription: undefined
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
              setSelectedSubscription={this.setSelectedSubscription}
            />
          )
        )}
        <UnsubscribeModal
          selectedSubscription={this.state.selectedSubscription}
          cancelSubscription={this.cancelSubscription}
          closeModal={this.clearSelectedSubscription} />
      </div>
    );
  }
}
