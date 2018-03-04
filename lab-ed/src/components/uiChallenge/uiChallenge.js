import React from 'react'
import {connect} from 'react-redux'
import './_uiChallenge.scss'

class Uichallenge extends React.Component {
  render() {
    return (

      <div className="box">
      <div className="margin">
        <h1>UI Challenge - Custom Form Elements</h1>
        <p className="small-text">
          NOTE: <span className="em-bold">DO NOT</span> attempt to directly style the radio buttons, checkboxes, or the custom select box - you’ll need to use the provided sprite sheet and a series of custom JS methods to complete this challenge… don’t worry if it’s not perfect - styling custom form elements can be tricky and you’ll need to use your best judgement at times!
        </p>
        <form className="form-one">
          <p>text input</p>
          <input required className="input" type="text" placeholder="placeholder text"/>
        </form>
        <form className="form-two" noValidate>
          <p>text input w/ validation error</p>
          <div className="ftdiv">
            <input className="input in-border in-border-red" type="text" placeholder="placeholder text"/>
            <p className="red">please enter a valid username</p>
          </div>
        </form>
        <form>
          <p>checkbox</p>
          <input className="input-check1" type="checkbox"/>
          <div className="checkbox1"></div>
          <input className="input-check2" type="checkbox"/>
          <div className="checkbox2"></div>
          <input className="input-radio" type="checkbox"/>
          <p>radio</p>
          <div className="radio1"></div>
          <div className="radio2"></div>
          <p>buttons</p>
          <button className="button-one" type="submit">submit</button>
          <button className="button-two" type="submit">submit</button>
        </form>
      </div>
    </div>
    
    )
  }
}

export default Uichallenge