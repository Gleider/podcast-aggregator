import React from 'react';

const Notification = (props) => {
  return (
    // <div className="row podcast-row">
    <tr>
      <td>{ props.title }</td>
      <td>{ props.episode }</td>
      <td style={{display: 'flex'}}>
        <button 
            type="button" 
            className="btn btn-sm btn-listen"
            onClick={(e) => {
              props.listenTo(props.id)
            }}>
          Listen
        </button>
        <button 
            type="button" 
            className="btn btn-sm btn-dismiss"
            onClick={(e) => {
              props.dismiss(props.id)
            }}>
          Dismiss
        </button>
      </td>
    </tr>
    // </div>
  );
};

export default Notification;

// Props must include:
// - id                     :number
// - title                  :string
// - episode                :string
// - dismiss                :function
