import React from 'react';
import {Input} from '../form-elements';
import './_ui_challenge.scss';

class UIChallenge extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind();
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (
      <section>
        <h2>UI Challenge</h2>
        <form className="ui-challenge-form" onSubmit={this.handleSubmit} noValidate>
          <div>
            <Input config={{
              name: 'name', 
              type: 'text', 
              className: 'name-input', 
              placeholder: 'Name',
            }}/>
          </div>

          <div>  
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

          <div>
            <div>
            <input type="checkbox" name="list"/>
            <label htmlFor="list"></label>
            <input type="text"/>
            <ul>
              <li>Hello</li>
              <li>Goodbye</li>
            </ul>
            </div>
          </div>

        </form>
      </section>
    );
  }
}

export default UIChallenge;