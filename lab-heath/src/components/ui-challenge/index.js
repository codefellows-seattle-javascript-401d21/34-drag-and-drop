

import React from 'react';
import ReactDom from 'react-dom';
import FormInput from './ui-compoents/text-input/index';
import Button from './ui-compoents/button/index';
import CheckBox from './ui-compoents/check-box/index';
import RadioButton from './ui-compoents/radio-btn/index';
import SelectBox from './ui-compoents/select-box/index';

class UiChallenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      // slider: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sliderToggle = this.sliderToggle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    /^[a-zA-Z]{4,16}$/.test(this.state.title) ? undefined : console.log('failed');
  }

  sliderToggle(e) {
    console.log('slider is:', e.target.checked);
    this.setState({slider: e.target.checked});
  }

  render() {
    return (
      <div className="application">
        <h1>Hello world!</h1>
        <h3>Check out my custom form elements</h3>

        <div className="form-container">
          <form onSubmit={this.handleSubmit} noValidate>

            <h4>Input box</h4>
            <FormInput 
              config={({
                className: 'validated-input',
                name: 'title',
                value: this.state.title,
                type: 'text',
                placeholder: 'the name of you sir!',
                id:'form-box',
              })}
              onChange={this.handleChange}/>


            <h4>SelectBox</h4>
            <SelectBox  
              config={({
                menuName: 'SelectBox',
                item1: 'this',
                item2: 'is',
                item3: 'my',
                item4: 'box',
              })} />


            <h4>Radio Button</h4>
            <RadioButton
              config={({
                name: 'group1',
                divName: 'radio-btn-div',
                labelName: 'radio-btn-label',
                id: 'radio-btn',
              })}/>

            <RadioButton
              config={({
                name: 'group1',
                divName: 'radio-btn-div',
                labelName: 'radio-btn-label',
                id: 'radio-btn2',
              })}/>


            <h4>check box</h4>
            <CheckBox
              config={({
                divName: 'checkbox-div',
                labelName: 'checkbox-label',
                id: 'check-box',
                name: 'checkbox',
              })}/>

            <h4>Button</h4>
            <Button
              config={({
                className: 'submit_button',
                name: 'button-one',
                buttonText: 'click here',
              })}/>

          </form>
        </div>
      </div>
    );
  }
}

export default UiChallenge;