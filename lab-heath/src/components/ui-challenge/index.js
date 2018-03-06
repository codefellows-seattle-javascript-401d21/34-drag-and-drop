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
      dropDown: '',
      checkbox: false,
      radio: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    return (
      <div className="application">
        <h1>Ya, this is a form to show off my sweet sweet baby jesus skills</h1>
        <h3>i got buttons, inputs, radios, checkbox and SelectBox.  pick what you like but bewarned, it might brake something.</h3>

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
                menuName: this.state.dropDown || 'SelectBox',
                item1: 'this',
                item2: 'is',
                item3: 'my',
                item4: 'box',
              })}
              onChange={this.handleChange} />


            <h4>Radio Button</h4>
            <RadioButton
              config={({
                name: 'group1',
                divName: 'radio-btn-div',
                labelName: 'radio-btn-label',
                id: 'radio-btn',
              })} />

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