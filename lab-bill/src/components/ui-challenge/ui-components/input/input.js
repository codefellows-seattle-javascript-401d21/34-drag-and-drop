import './_input.scss';
import React from 'react';

class FormInput extends React.Component {
  render() {
    return (
      <div>
        <input
          type={this.props.config.type}
          name={this.props.config.name}
          value={this.props.config.value}
          placeholder={this.props.config.placeholder}
          onChange={this.props.onChange}
          className={this.props.config.className}
          pattern="[a-zA-Z]{0,16}"/>
        <label id="input-error">Please enter a valid username</label>
      </div>
    );
  }
}

export default FormInput;