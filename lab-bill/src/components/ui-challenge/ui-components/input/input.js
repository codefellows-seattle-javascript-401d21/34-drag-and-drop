import './_input.scss'
import React from 'react'

class FormInput extends React.Component {
  render() {
    return (
      <input
        type={this.props.config.type}
        name={this.props.config.name}
        value={this.props.config.value}
        placeholder={this.props.config.placeholder}
        onChange={this.props.onChange}
        className={this.props.config.className}
        pattern="[a-zA-Z]{4,16}"/>
    )
  }
}

export default FormInput