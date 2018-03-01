import React from 'react';
import './_text-input.scss';
class TextInput extends React.Component {


  render () {
    return (
      <div className={this.props.config.className}>
        <label htmlFor={this.props.config.id}>text input</label>
        <input id={this.props.config.id} type='text' pattern='[a-zA-z]' required/>
        <label id='input-error'>Please enter a valid username</label>

      </div>
    );
  }
}



export default TextInput;