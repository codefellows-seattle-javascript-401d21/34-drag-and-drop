import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import FormInput from './form-elements/form-input/index';


class CustomForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  };

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  };

  render(){
    return(
      <div className="custom-form">
        <h1>Custom Form</h1>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              config={({
                className: 'form-input',
                name: 'title',
                value: this.state.title,
                type: 'text',
                placeholder: 'Enter a text'
              })}
              onChange={this.handleChange} />

              <button type="submit">
                submit
              </button>
          </form>
        </div>

      </div>
    );
  };
};

export default CustomForm;
