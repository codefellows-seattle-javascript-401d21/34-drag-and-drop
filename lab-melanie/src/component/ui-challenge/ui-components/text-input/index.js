import './_text-input';
import React from 'react';

class TextInput extends React.Component {
  render() {
    return (
      <div className="input-form">
        <form>
          <label
            htmlFor={this.props.config.id}></label>
          <input
            type={this.props.config.type}
            name={this.props.config.name}
            value={this.props.config.value}
            placeholder={this.props.config.placeholder}
            onChange={this.props.onChange}
            className={this.props.config.className}
            pattern={this.props.pattern}></input>
          <label
            className="input-error">please enter a valid username</label>
        </form>
      </div>
    );
  }
}
