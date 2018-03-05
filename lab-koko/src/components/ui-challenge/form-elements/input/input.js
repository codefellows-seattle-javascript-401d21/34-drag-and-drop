import './input.scss';
import React from 'react';

class Input extends React.Component {
  render() { 
    return (
      <div className="inputs">
        <label htmlFor={this.props.config.id}/>
        <h3>text input</h3>
        <input
          id={this.props.config.id}
          type={this.props.config.type}
          name={this.props.config.name}
          value={this.props.config.value}
          placeholder={this.props.config.placeholder}
          onChange={this.props.onChange}
          className={this.props.config.className}
          pattern={this.props.config.pattern} 
          required
        />
        <p id="input-error">please enter a valid username</p>
      </div>
    );
  }
}
 
export default Input;