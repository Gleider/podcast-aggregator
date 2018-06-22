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
          className="subscription-cancel"
          onClick={(e) => {
            props.cancelSubscription(props.id)
          }}>X</button>
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

// <div style="display:flex;align-items:center;width:100px;font-size:1em;">Text Content</div>
