import React, {Component} from 'react';
import './css/animateArrow.css'

class AnimateArrow extends Component {
  render(){
    return (
      <div>
      <input id="check-arrow" type="checkbox"/>
      <label for="check-arrow">
        <div className="arrow">
          <span className="modify"></span>
        </div>
      </label>
      </div>
    );
  }
}
 
export default AnimateArrow;