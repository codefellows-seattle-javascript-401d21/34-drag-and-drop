import React from 'react';
import ReactDom from 'react-dom';
import FormInput from './form-elements/input/input';
import Button from './form-elements/button/button';
import Radio from './form-elements/radio/radio';
import Checkbox from './form-elements/checkbox/checkbox';
import Select from './form-elements/select/select';

class UIchallenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
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
      <div className="challenge">
        <h1>UI Challenge</h1>
        <h3>Custom form elements</h3>

        <div className="textbox-container">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              config={({
                className: 'form-inputs',
                name: 'title',
                value: this.state.title,
                type: 'text',
                placeholder: 'enter username',
              })}
              onChange={this.handleChange}/>
          </form>
        </div>

        <Select
          config={({
            menuName: this.state.dropDown || 'Please select an option',
            item1: 'option 1',
            item2: 'option 2',
            item3: 'option 3',
            item4: 'option 4',
            item5: 'option 5',
          })}
          onChange={this.handleChange}/>

        <Checkbox
          config={({
            divName: 'checkbox-div',
            labelName: 'checkbox-label',
            id: 'check-box',
            name: 'checkbox',
          })}/>


        <Radio
          config={({
            name: 'radio-one',
            divName: 'radio-btn-div',
            labelName: 'radio-btn-label',
            id: 'radio-button',
          })}/>


        <Button
          config={({
            className: 'buttons',
            name: 'button-one',
            text: 'submit',
          })}/>
      </div>
    );
  }
}
export default UIchallenge;
