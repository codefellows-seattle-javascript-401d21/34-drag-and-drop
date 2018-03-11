import './_radio.scss';

import React from 'react';


class Radio extends React.Component{
  render(){
    return(
      <div>
        <input
          id={this.props.config.id}
          name='radio-button'
          type='radio' />
        <label htmlFor={this.props.config.id}></label>
      </div>
    );
  }
}

export default Radio;
