import './styles/reset.scss';
import './styles/ui-challenge.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Input from './form-elements/input/input';
import Select from './form-elements/select/select';
import CheckBox from './form-elements/check/check';
import Radio from './form-elements/radio/radio';
import Button from './form-elements/button/button';

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      checked: false,
      selected: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
    this.handlCheck = this.handlCheck.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }
  handlCheck(event) {
    console.log('box is', event.target.checked);
    this.setState({slider: !this.state.checked});
  }
  handleClick(event){
    this.setState({
      selected: !this.state.selected,
    });
 
  }
  render() { 
    return ( 
      <div className="application">
        <h1>Hello world!</h1>
        <h3>Check out my custom form elements</h3>
        <div className="form-container">
          <form>
            <Input
              config={({
                id: 'input',
                type: 'text',
                className: 'form-inputs',
                name: 'title',
                value: this.state.title,
                placeholder: 'placeholder text',
                pattern: '[a-zA-Z]{4,16}',
              })} 
              onChange= {this.handleChange} 
            />
            <Select
              config={({
                type: 'submit',
                odd: 'odd',
                even: 'even',
                menuName: this.state.selected || 'please select an option...',
                classNameLi:'drop-menu',
                classNameUl: 'menu-content',
                name:'drop-down',
                buttonClass:'button-class',
              })}
            />
            <CheckBox
              config={({
                className:'checkboxes',
                divname: 'checkbock-div',
                name:'checkbox', 
                type:'checkbox',
                id:'box',
              })}
              onChange={this.handleChange}
            />
            <h3 id='radio-title'>radio</h3>
            <Radio
              config={({
                className:'radios',
                name:'radio1',
                divname: 'radio-div',
                id:'radioOne',
              })} />
            <Radio
              config={({
                className:'radios',
                name:'radio1',
                divname: 'radio-div',
                id:'radioTwo',
              })} />
            <Radio
              config={({
                className:'radios',
                name:'radio1',
                divname: 'radio-div',
                id:'radioThree',
              })} />
            <Button 
              config={({
                name: 'button',
                id: 'button',
                type: 'submit',
                buttonText: 'submit',
                className:'buttons',
                divname:'button-div',
              })}
              onSubmit={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}
 
export default Challenge;