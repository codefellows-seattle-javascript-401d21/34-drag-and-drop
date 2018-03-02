import './_input.scss';
import React from 'react';

class FormInput extends React.Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="validated-input">Text Input with Form Validation</label>
        <input
          required
          id="validated-input"
          pattern="[a-zA-Z]{4,16}"
          name={this.props.config.name}
          type={this.props.config.type}
          value={this.props.config.value}
          placeholder={this.props.config.placeholder}
          onChange={this.props.onChange}
          className={this.props.config.className}/>
        <label id="input-error">Please enter a valid username</label>
      </div>
    );
  }
}

export default FormInput;
