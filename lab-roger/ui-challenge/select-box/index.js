import React from 'react';
import './_select-box.scss';
class SelectBox extends React.Component {
  render () {
    return (
      <div className='select-box'>
        <div><p>select box</p></div>
        <input id={this.props.config.id} type="checkbox" />
        <div className='open'>Option 1</div>
        <div className='open'>Option 2</div>
        <div className='open'>Option 3</div>
        <div className='open'>Option 4</div>
        <div className='open'>Option 5</div>
       
      </div>
    );
  }
}

export default SelectBox;