import React from 'react';
import UiBuildInput from '../ui-build-input';

class UiBuildForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text_validation: '',
      radio_buttons: '',
      select: '',
      checkbox: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleChecked(e) {
    this.setState({[e.target.name]: e.target.checked});
  }

  render() {
    return (
      <form>
        <UiBuildInput config={
          {
            type: 'text',
            name: 'text_validation',
            placeholder: 'Username',
            validation: '',
            onChange: this.handleChange,
            value: this.state.text_validation,
          }
        }/>
        <UiBuildInput config={
          {
            type: 'radio',
            name: 'radio_buttons',
            onChange: this.handleChange,
            optionVals: ['A', 'B', 'C'],
          }
        } />
        <UiBuildInput config={
          {
            type: 'checkbox',
            name: 'checkbox',
            onChange: this.handleChecked,
          }
        } />
        <UiBuildInput config={
          {
            type: 'select',
            name: 'select',
            optionVals: ['A', 'B', 'C'],
            onChange: this.handleChange,
            value: this.state.select,
          }
        }/>
      </form>
    );
  }
}

export default UiBuildForm;

// this.props.config === {
//  type: (type of input)
//  optionVals: [(contains options information for inputs)]
//  placeholder: (placeholder information)
//  onChange: (what to do on change of values)
//  name: (name of the input)
//  value: (current value)
//  text: (text to be used in label or buttons)
// }