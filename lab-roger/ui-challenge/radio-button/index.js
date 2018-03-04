import React from 'react';
import './_radio-button.scss';
class RadioButton extends React.Component {
  render () {
    return (
      <div className='radio-button-container'>
        <h3>radio</h3>
        <input id='radio1'type='checkbox'/>
        <label className='label-radio' htmlFor='radio1'></label>
        <input defaultChecked id='radio2'type='checkbox'/>
        <label className='label-radio' htmlFor='radio2'></label>
      </div>
    );
  }
}

export default RadioButton;