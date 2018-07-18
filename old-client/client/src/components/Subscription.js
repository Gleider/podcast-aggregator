import React from 'react';

const Subscription = (props) => {
  return (
    <tr>
      <td>
        <img alt="Subscription Image" 
           src={ props.image } 
           className="podcast-image" />
      </td>
      <td><p className="podcast-title">{ props.title }</p></td>
      {props.onUserPage && 
        <td>
          <button 
            className="btn btn-unsubscribe"
            onClick={(e) => {
              props.setSelectedSubscription(props.id);
            }}>X</button>
        </td>
      }
    </tr>
  );
};

export default Subscription;


// Props must include:
// - id                     :number
// - title                  :string
// - image                  :string
// - onUserPage             :boolean
// - cancelSubscription(id) :function
