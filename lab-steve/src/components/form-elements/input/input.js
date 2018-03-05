import React from 'react';
import './_input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.config = this.buildConfig(this.props.config);

    // Binding Handlers
    Object.getOwnPropertyNames(Input.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  buildConfig(config) {
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

    // For label (to reference id)
    if (config.forLabel) {
      if (!config.attrs.id)
        throw new Error('id must be specified for for label');
      config.label = <label htmlFor={config.attrs.id}></label>;
    }

    return config;
  }

  render() {
    return (
      <div className={this.config.divClass ? this.config.divClass : 'form-div-wrapper'}>
        {this.config.title}
        <input {... this.config.attrs} />
        {this.config.validate}
        {this.config.label}
      </div>
    );
  }
}

export default Input;
