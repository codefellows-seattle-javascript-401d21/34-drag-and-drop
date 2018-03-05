import React from 'react';
import './_input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.config = this.sanitizeConfig(this.props.config);

    // Binding Handlers
    Object.getOwnPropertyNames(Input.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  sanitizeConfig(config) {
    // Input Title
    if (config.title) {
      config.title = (
        <label>
          <h4>
            {config.title}
          </h4>
        </label>
      );
    }

    // Validation error string
    if (config.validate) {
      config.validate = (
        <div className='error-message'>
          <p>{config.validate.errorStr}</p>
        </div>
      );
    }

    return config;
  }

  render() {
    return (
      <div>
        {this.config.title}
        <input {... this.config.attrs} />
        {this.config.validate}
      </div>
    );
  }
}

export default Input;
