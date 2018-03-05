
import './_radio.scss';

import React from 'react';

class Radio extends React.Component {
  render() {
    return (
      <div className={this.props.config.divName}>
        <h4>Radio Button</h4>
        <input
          type='radio'
          id={this.props.config.id}
          value={this.props.config.item1}
          name='radio' />

        <label
          htmlFor={this.props.config.id}
          className={this.props.config.labelName} />

      </div>
    );
  }
}

export default Radio;
