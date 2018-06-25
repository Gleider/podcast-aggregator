import React from 'react';

const Subscription = (props) => {
  return (
    <div className="row subscription">
      <img alt="Subscription Image" 
           src={ props.image } 
           className="subscription-image" />
      <p className="subscription-title">{ props.title }</p>
      {props.onUserPage && 
        <button 
          className="btn btn-danger btn-sm"
          onClick={(e) => {
            props.setSelectedSubscription(props.id);
          }}>Unsubscribe</button>
      }
    </div>
  );
};

export default Subscription;


// Props must include:
// - id                     :number
// - title                  :string
// - image                  :string
// - onUserPage             :boolean
// - cancelSubscription(id) :function
