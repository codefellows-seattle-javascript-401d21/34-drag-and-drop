import React from 'react';
import {Input, CustomSelect} from '../form-elements';
import './_ui_challenge.scss';

class UIChallenge extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange(e){
    console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (
      <section>
        <h2>UI Challenge</h2>
        <form className="ui-challenge-form" onSubmit={this.handleSubmit} noValidate>
          <div className="text-input-custom">
            <Input config={{
              name: 'name', 
              type: 'text', 
              className: 'name-input', 
              placeholder: 'Name',
            }}/>
          </div>

          <div className="text-input-custom">  
            <Input config={{
              name: 'username', 
              type: 'text-validate', 
              className: 'username-input', 
              labelText: 'please enter a valid user name', 
              placeholder: 'Username', 
              pattern: '^[Aa-zZ]{6,18}$', 
              required: 'required',
            }}/>
          </div>

          <div className="selects-custom">
            <CustomSelect config={{
              name: 'pets', 
              class: 'pets-select',
              options: [{value:'./images/dog.jpg', text: 'Dog'}, {value:'./images/cat.jpg', text: 'Cat'}, {value:'./images/mouse.jpg', text: 'Mouse'}, {value:'./images/froggy.jpg', text: 'Froggy'}],
              placeholder: 'Please select a pet',
              reset_msg: '-none-',
              onChange: this.handleChange,
            }}/>
          </div>

          <div className="selects-custom big-bottom">
            <CustomSelect config={{
              name: 'options', 
              class: 'options-select',
              options: [{value:'Option_1', text: 'Option 1'}, {value:'Option_2', text: 'Option 2'},  {value:'Option_3', text: 'Option 3'},  {value:'Option_4', text: 'Option 4'},  {value:'Option_5', text: 'Option 5'}],
              placeholder: 'Please select an option',
              reset_msg: '-none-',
              defaultChecked: 'defaultChecked',
              onChange: this.handleChange,
            }}/>   
          </div>

          <div className="checkbox-inputs">
            <Input config={{
              name: 'rice', 
              type: 'checkbox', 
              className: 'ck-class', 
              id:'rice-checkbox',  
              defaultChecked:false,
            }}/>

            <Input config={{
              name: 'pay', 
              type: 'checkbox', 
              className: 'ck-class', 
              id:'pay-checkbox',  
              defaultChecked:true,
            }}/>
          </div>

          <div className="radio-inputs">
            <Input config={{
              name: 'frequency', 
              type: 'radio', 
              className: 'radio-class', 
              id:'frequency-radio-one',  
              defaultChecked:false,
            }}/>

            <Input config={{
              name: 'frequency', 
              type: 'radio', 
              className: 'radio-class', 
              id:'frequency-radio-two',  
              defaultChecked:true,
            }}/>
          </div>

          <div className="submit-inputs">
            <Input config={{name: 'submit', type: 'submit', className: 'submit-btn'}}/>
            <Input config={{name: 'submit', type: 'submit', className: 'submit-btn'}}/>
          </div>

        </form>
      </section>
    );
  }
}

export default UIChallenge;
