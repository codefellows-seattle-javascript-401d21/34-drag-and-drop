import './_reset.scss';
import './_ui-challenge.scss';
import React from 'react';
import {connect} from 'react-redux';

class UIChallenge extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectToggle = this.handleSelectToggle.bind(this);
    this.handleRadioToggle = this.handleRadioToggle.bind(this);
    this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this);
  }

  handleSelectToggle () {
    if (document.getElementById('select-list').getAttribute('class') === 'inactive') {
      document.getElementById('select-box-arrow').setAttribute('class', 'active');
      document.getElementById('select-list').setAttribute('class', 'active');
    } else {
      document.getElementById('select-box-arrow').setAttribute('class', 'inactive');
      document.getElementById('select-list').setAttribute('class', 'inactive');
    }
  }

  handleCheckboxToggle () {
    console.log('HANDLING CHECKBOX TOGGLE');
    if (document.getElementById('checkbox-btn').getAttribute('class') === 'icons inactive') {
      document.getElementById('checkbox-btn').setAttribute('class', 'icons active');
    } else {
      document.getElementById('checkbox-btn').setAttribute('class', 'icons inactive');
    }
  }

  handleRadioToggle () {
    if (document.getElementById('radio-btn').getAttribute('class') === 'icons inactive') {
      document.getElementById('radio-btn').setAttribute('class', 'icons active');
    } else {
      document.getElementById('radio-btn').setAttribute('class', 'icons inactive');
    }
  }

  render() {
    return (
      <div id="UI-body">
        <h1 className="UI-h1" >UI Challenge - Custom Form Elements</h1>

        <form id="new-form">
          <label className="UI-label" htmlFor="text-input">
            <p>text input</p>
            <input className="UI-input" type="text" name="text-input" placeholder="placeholder text" required />
          </label>
  
          <label  className="UI-label" htmlFor="select-box">
            <p>select box</p>
            <div id="select-box-container"  onClick={this.handleSelectToggle}>
              <input type="text" id="select-box" className="inactive UI-input" placeholder="placeholder text" />
              <div id="select-box-arrow" className="inactive"></div>
              <ol id="select-list" className="inactive">
                <li className="odd">Option 1</li>
                <li className="even">Option 2</li>
                <li className="odd">Option 3</li>
                <li className="even">Option 4</li>
                <li className="odd">Option 5</li>
              </ol>
            </div>
  
  
          </label>
  
          <label  className="UI-label" htmlFor="checkbox-btn">
            <p>checkbox</p>
            <div id="checkbox-btn" className="icons inactive" onClick={this.handleCheckboxToggle}></div>
          </label>
  
          <label className="UI-label"  htmlFor="radio-btn">
            <p>radio</p>
            <div id="radio-btn" className="icons inactive" onClick={this.handleRadioToggle}></div>
          </label>
  
          <label  className="UI-label" htmlFor="submit-btn">
            <p>submit</p>
            <button id="submit-btn" type="submit" className="UI-submit" >submit</button>
          </label>
  
  
        </form>
      </div>
    );
  }
}

export default UIChallenge;
