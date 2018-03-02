import './_radio-btn.scss';

import React from 'react';

class RadioButton extends React.Component {
  render() {
    return (
      <div className={this.props.config.divName}>

        <input
          type='radio'
          id={this.props.config.id}
          name={this.props.config.name}/>

        <label 
          htmlFor={this.props.config.id} 
          className={this.props.config.labelName} />  

      </div>
    );
  }
}

export default RadioButton;

