import React from 'react';
import './_checkbox.scss';
class CheckBox extends React.Component {
  render () {
    return (
      <div className='check-box-container'>
        <div className='checkbox-holder'>
          <input id='button1'type='checkbox'/>
          <label className='label' htmlFor='button1'><div ></div></label>
          
        </div>
        <div className='checkbox-holder'>
          <input id='button2'type='checkbox'/>
          <label className='label' htmlFor='button2'><div ></div></label>
          
        </div>
      </div>
    );
  }
}

export default CheckBox;