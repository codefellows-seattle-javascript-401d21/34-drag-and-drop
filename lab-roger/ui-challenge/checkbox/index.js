import React from 'react';
import './_checkbox.scss';
class CheckBox extends React.Component {
  render () {
    return (
      <div className='check-box-container'>
        <h3>checkbox</h3>
        <input id='checkbox-button1'type='checkbox'/>
        <label className='label-checkbox' htmlFor='checkbox-button1'></label>
        <input defaultChecked id='checkbox-button2'type='checkbox'/>
        <label className='label-checkbox' htmlFor='checkbox-button2'></label>
      </div>
    );
  }
}

export default CheckBox;