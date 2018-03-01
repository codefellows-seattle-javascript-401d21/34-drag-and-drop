import React from 'react'
import ReactDom from 'react-dom'
import FormInput from './ui-components/input/input'
import Slider from './ui-components/slider/slider'

class UI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      slider: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sliderToggle = this.sliderToggle.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  sliderToggle(e) {
    console.log('slider is:', e.target.checked)
    this.setState({slider: e.target.checked})
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
                placeholder: 'React Documentation'
              })}
              onChange={this.handleChange}/>

              <Slider
                config={({
                  id: 'slider-one',
                  className: 'slider-checkbox',
                  value: this.state.sliderOne,
                  name: 'slider-one'
                })}
                onChange={this.sliderToggle}/>

            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    )
  }
}
export default UI