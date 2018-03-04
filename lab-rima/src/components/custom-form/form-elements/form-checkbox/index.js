import './_checkbox.scss';

import React from 'react';


class CheckBox extends React.Component{
  render(){
    return(
      <div>
        <input
          id={this.props.config.id}
          type='checkbox' />
        <label htmlFor={this.props.config.id}></label>
      </div>
    );
  }
}

export default CheckBox;
