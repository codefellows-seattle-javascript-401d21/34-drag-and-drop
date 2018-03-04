import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import FormInput from './form-elements/form-input/index';
import SelectBox from './form-elements/form-selectbox/index';
import CheckBox from './form-elements/form-checkbox/index';
import Radio from './form-elements/form-radio/index';
import Button from './form-elements/form-button/index';


class CustomForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      inputNoValidation: '',
      inputWithValidation: '',
      inputValid: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  };

  handleChange(event){
    if(event.target.name === 'inputWithValidation' && /^[a-zA-Z0-9]+$/.test(event.target.value)){
      this.setState({[event.target.name]: event.target.value, inputValid: true});
    }else{
      this.setState({inputValid: false});
    };

    if(event.target.name !== 'inputWithValidation'){
      this.setState({[event.target.name]: event.target.value});
    };
  };


  render(){
    return(
      <div className="custom-form">
        <h1>Custom Form</h1>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>

            <label>text input</label>

            <FormInput
              config={({
                className: 'form-input',
                name: 'inputNoValidation',
                type: 'text',
                placeholder: 'Enter text',
              })}
              onChange={this.handleChange} />

            <label>text input w/ validation</label>

            <FormInput
              config={({
                className: this.state.inputValid ? 'form-input-valid' : 'form-input-invalid',
                name: 'inputWithValidation',
                type: 'text',
                placeholder: 'Enter text',
              })}
              onChange={this.handleChange} />


            <label>select box</label>

            <SelectBox
              config={({
                className: 'select-box',
                classNameOne: 'optionOne',
                valueOne: 'option 1',
                classNameTwo: 'optionTwo',
                valueTwo: 'option 2',
                classNameThree: 'optionThree',
                valueThree: 'option 3',
                classNameFour: 'optionFour',
                valueFour: 'option 4',
                classNameFive: 'optionFive',
                valueFive: 'option 5',
              })} />


            <label>check box</label>

            <div className='checkboxes'>
              <CheckBox
                config={({
                  id: 'checkboxOne',
                })} />
              <CheckBox
                config={({
                  id: 'checkboxTwo',
                })} />
            </div>


            <label>radio</label>

            <div className='radio-buttons'>
              <Radio
                config={({
                  className: 'unchecked-radio-icon',
                })}
                onClick={this.handleClick} />
              <Radio
                config={({
                  className: 'checked-radio-icon',
                })}
                onClick={this.handleClick} />
            </div>


            <label>button</label>

            <Button
              config={({
                className: 'submit',
                type: 'submit',
                name: 'submit',
                buttonText: 'Submit',
              })} />

          </form>
        </div>

      </div>
    );
  };
};

export default CustomForm;
