import './_button.scss';

import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          type='submit'
          className={this.props.config.className}
          name={this.props.config.name}
          onChange={this.props.onChange}>
          {this.props.config.buttonText}
        </button>
      </div>
    );
  }
}

export default Button;