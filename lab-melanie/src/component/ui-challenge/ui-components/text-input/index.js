import './_text-input.scss';
import React from 'react';

class TextInput extends React.Component {
  render() {
    return (
      <div className="input-form">
        <form noValidate>
          <label
            htmlFor={this.props.config.id}>text input</label>
          <input
            type={this.props.config.type}
            name={this.props.config.name}
            value={this.props.config.value}
            placeholder={this.props.config.placeholder}
            onChange={this.props.onChange}
            className={this.props.config.className}
            pattern={this.props.config.pattern}></input>
          <label
            className="input-error">please enter a valid username</label>
        </form>
      </div>
    );
  }
}

export default TextInput;
