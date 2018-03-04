import React from 'react';
import ReactDom from 'react-dom';
import FormInput from './ui-components/input/input';
import Slider from './ui-components/slider/slider';
import SelectBox from './ui-components/select/select';
import SubmitButton from './ui-components/button/button';

class UI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      slider: false,
      select: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sliderToggle = this.sliderToggle.bind(this);
    this.selectToggle = this.selectToggle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  sliderToggle(e) {
    console.log('slider is:', e.target.checked);
    this.setState({slider: e.target.checked});
  }
  selectToggle(e) {
    console.log('slider is:', e.target.checked);
    console.log('etarget:', e.target);
    if(this.state.select === false) this.setState({select: true});
    if(this.state.select === true) this.setState({select: false});
  }
  render() {
    return (
      <div className="ui-div">
        <h1>Custom Form</h1>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              config={({
                className: 'form-inputs',
                name: 'title',
                value: this.state.title,
                type: 'text',
                placeholder: 'React Documentation',
              })}
              onChange={this.handleChange}/>
            <SelectBox
              onChange={this.selectToggle}/>
            {/* <Slider
                config={({
                  id: 'slider-one',
                  className: 'slider-checkbox',
                  value: this.state.sliderOne,
                  name: 'slider-one'
                })}
                onChange={this.sliderToggle}/> */}
            <SubmitButton/>
          </form>
        </div>
      </div>
    );
  }
}
export default UI;