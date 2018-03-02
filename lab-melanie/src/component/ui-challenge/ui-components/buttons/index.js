import './_button.scss';
import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <div className="button-div">buttons</div>
        <button
          type="button"
          className="button-one">Submit</button>
        <button
          type="button"
          className="button-two">Submit</button>
      </div>
    );
  }
}

export default Buttons;
