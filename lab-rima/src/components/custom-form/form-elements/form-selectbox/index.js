import './_selectbox.scss';

import React from 'react';


class SelectBox extends React.Component{
  render(){
    return(
      <div>
        <select
          className={this.props.config.className} required>
          <option
            value=""
            hidden>
            Please select one
          </option>
          <option
            className={this.props.config.classNameOne}
            value={this.props.config.valueOne}>
            {this.props.config.valueOne}
          </option>
          <option
            className={this.props.config.classNameTwo}
            value={this.props.config.valueTwo}>
            {this.props.config.valueTwo}
          </option>
          <option
            className={this.props.config.classNameThree}
            value={this.props.config.valueThree}>
            {this.props.config.valueThree}
          </option>
          <option
            className={this.props.config.classNameFour}
            value={this.props.config.valueFour}>
            {this.props.config.valueFour}
          </option>
          <option
            className={this.props.config.classNameFive}
            value={this.props.config.valueFive}>
            {this.props.config.valueFive}
          </option>
        </select>
      </div>
    );
  };
};

export default SelectBox;
