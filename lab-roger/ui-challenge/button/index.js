import React from 'react';
import '../button/_button.scss';

class Button extends React.Component {
  render () {
    return (
      <div className='button-container'>
        <h3>buttons</h3>
        <input  id='button'type='checkbox'/>
        <label className='label-button' htmlFor='button'>submit</label>
        <input defaultChecked id='button2'type='checkbox'/>
        <label className='label-button' htmlFor='button2'>submit</label>
      </div>
    );
  }
}

export default Button;