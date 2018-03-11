import './_input-validation.scss';

import React from 'react';


class FormInputValidation extends React.Component{
  render(){
    return(
      <div>
        <input
          type={this.props.config.type}
          name={this.props.config.name}
          value={this.props.config.value}
          placeholder={this.props.config.placeholder}
          onChange={this.props.onChange}
          id='input-validation-error-msg'
          className={this.props.config.className}
          pattern={this.props.config.pattern} />

        <label id='input-validation-error-msg'>
          {this.props.config.errMsg}
        </label>
      </div>
    );
  }
}

export default FormInputValidation;
