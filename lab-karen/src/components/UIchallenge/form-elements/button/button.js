import './_button.scss';
import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className='button-div'>
        <h4> Submit Button </h4>
        <button
          type='submit'
          className={this.props.config.className}
          name={this.props.config.name}
          onChange={this.props.onChange}>
          {this.props.config.text}
        </button>
      </div>
    );
  }
}

export default Button;
