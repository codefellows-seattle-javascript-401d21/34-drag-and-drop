import React from 'react';
import './_text-input.scss';
class TextInput extends React.Component {


  render () {
    return (
      <div className={this.props.config.className}>
        {/* <h3>{this.props.config.text}</h3> */}
        <label htmlFor={this.props.config.id}>{this.props.config.text}</label>
        <input id={this.props.config.id} 
          type='text' 
          pattern='[a-zA-z]{6,12}' 
          placeholder='placeholder text'
          required/>
        <label id='input-error'>Please enter a valid username</label>

      </div>
    );
  }
}



export default TextInput;