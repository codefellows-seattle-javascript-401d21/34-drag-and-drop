import './_button.scss';

import React from 'react';


class Button extends React.Component{
  render(){
    return(
      <div>
        <button
          className={this.props.config.className}
          type={this.props.config.type}
          name={this.props.config.name} >
          {this.props.config.buttonText}
        </button>
      </div>
    );
  }
}

export default Button;
