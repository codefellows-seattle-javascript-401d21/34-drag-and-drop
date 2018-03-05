import React from 'react'
import {connect} from 'react-redux'
import './_reset.scss'
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
          <p for="validated-input">text input w/ validation error</p>
          <div className="ftdiv">
            <input className="input" id="validated-input" type="text" placeholder="placeholder text" pattern="[a-zA-Z]{4,16}" required/>
            <p id="input-error" className="red">please enter a valid username</p>
          </div>
        </form>
        <form className="form-three">
          <p>select box</p>
          <input required className="input select1" type="text" placeholder="please select an option..."/>
        </form>
        <form>
          <p>checkbox</p>
          <input className="input-check1" type="checkbox"/>
          <div className="checkbox1"></div>
          <input className="input-check2" type="checkbox"/>
          <div className="checkbox2"></div>
          
          <p>radio</p>
          <input className="input-radio1" type="checkbox"/>
          <div className="radio1"></div>
          <input className="input-radio2" type="checkbox"/>
          <div className="radio2"></div>
          <p>buttons</p>
          <button className="button-one hover-one" type="submit">submit</button>
          <button className="button-two hover-two" type="submit">submit</button>
        </form>
      </div>
    </div>
    
    )
  }
}

export default Uichallenge
