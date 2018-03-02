import './_radio.scss';
import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: false,
    };
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleRadio() {
    this.setState({
      radio: !this.state.radio,
    });
  }
  render() {
    return (
      <div>
        <div className="radio-div">radio</div>
        <div className={this.state.radio ? 'radio' : 'no-radio'} onClick={this.handleRadio}></div>
      </div>
    );
  }
}

export default Radio;
