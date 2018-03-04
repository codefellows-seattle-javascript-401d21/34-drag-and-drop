import React from 'react';
import './_input.scss';

class Input extends React.Component{
  constructor(props){
    super(props);
    this.config = this.props.config;
    this.label = {};
    this.setAttributes = this.setAttributes.bind(this);
    this.needsLabel = this.needsLabel.bind(this);
  }

  componentWillMount(){
    let labelText = '';
    let label = false;
    if (this.config.type !== 'checkbox' || this.config.type !== 'radio' || this.config.type !== 'text-validate'){ 
      label = true;
      if (this.config.type === 'text-validate'){
        labelText = this.config.labelText;
        this.config.type = 'text';
        this.config.className = `${this.config.className} custom-validate`;
        delete this.config.labelText;
      }
    }
    this.label = {
      needsLabel: label,
      labelText: labelText,
    };
  }

  needsLabel(labelProps){
    if (!labelProps.needsLabel) return;
    return <label className={`${this.props.config.type}-label`} htmlFor={this.props.config.id}>{labelProps.labelText}</label>;
  }

  setAttributes(config){
    config.className = `${config.className} custom-input`;
    return config;
  }

  render(){
    return (
      <div className="custom-input-wrap">
        <input {... this.setAttributes(this.config)} />
        {this.needsLabel(this.label)}
      </div>
    );
  }
}

export default Input;