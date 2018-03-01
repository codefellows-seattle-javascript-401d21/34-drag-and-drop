import './_button.scss';

import React from 'react';


class Button extends React.Component{
  render(){
    return(
      <button
        type={this.props.config.type}
        name={this.props.config.name}
        value={this.props.config.value}
        onHover={this.props.onHover}
        onClick={this.props.onClick}
      />
        Submit
      </button>
    );
  };
};

export default Button;
