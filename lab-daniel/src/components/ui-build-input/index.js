import React from 'react';

class UiBuildInput extends React.Component {
  render() {
    switch(this.props.config.type) {
    case 'radio': return (
      <div>
        {this.props.config.optionVals.map((value, index) => {
          return (
            <div key={this.props.config.name + index} className={`custom-radio`}>
              <input
                id={this.props.config.name + index}
                type={this.props.config.type}
                name={this.props.config.name}
                value={value}
              />
              <label htmlFor={this.props.config.name + index}>
                <div></div>
              </label>
            </div>
          );
        })}
      </div>
    );
    case 'checkbox': return (
      <div className={`custom-checkbox`}>
        <input
          id={this.props.config.name}
          type={this.props.config.type}
          name={this.props.config.name}
        />
        <label htmlFor={this.props.config.name}>
          <div></div>
        </label>
      </div>
    );
    case 'text': return (
      <div className={`custom-text`}>
        <label htmlFor={this.props.config.name}>{this.props.config.placeholder}</label>
        <input 
          type={this.props.config.type}
          name={this.props.config.name}
          value={this.props.config.value}
          onChange={this.props.config.onChange}
          placeholder={this.props.config.placeholder}
          validation={this.props.config.validation}
        />
        <label id={`${this.props.config.name}-error-label`}>Valid {this.props.config.placeholder} required.</label>
      </div>
    );
    case 'select': return (
      <div className={`custom-select`}>
        <div>{this.props.config.value}
          <select
            type={this.props.config.type}
            name={this.props.config.name}
            value={this.props.config.value}
            onChange={this.props.config.onChange}
          />
        </div>
        <div className={`custom-select-options`}>
          {this.props.config.optionVals.map(value => {
            <div data-value={value}>{value}</div>;
          })}
        </div>
      </div>
    );

    }
  }
}

export default UiBuildInput;

// this.props.config === {
//  type: (type of input)
//  optionVals: [(contains options information for inputs)]
//  placeholder: (placeholder information)
//  onChange: (what to do on change of values)
//  name: (name of the input)
//  value: (current value)
//  text: (text to be used in label or buttons)
// }