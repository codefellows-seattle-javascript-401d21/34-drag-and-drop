import React from 'react';
import './_select-box.scss';
class SelectBox extends React.Component {
  render () {
    return (
      <div className='select-box'>
        <h3>select box</h3>
        <label htmlFor={this.props.config.id}>Please select an option ...<div id='drop-arrow'></div></label>
        <input id={this.props.config.id} type='checkbox' defaultChecked/>
        
        <input id='option1' type='checkbox' />
        <label htmlFor='option1'className='open odd' >option1</label>
        <label htmlFor='option2'className='open even' >option2</label>
        <input id='option2' type='checkbox' />
        <label htmlFor='option3'className='open odd' >option3</label>
        <input id='option3' type='checkbox' />
        <label htmlFor='option4'className='open even' >option4</label>
        <input id='option4' type='checkbox' />
        <label htmlFor='option5'className='open odd' >option5</label>
        <input id='option5' type='checkbox' />
        </div>
       
    
    );
  }
}

export default SelectBox;