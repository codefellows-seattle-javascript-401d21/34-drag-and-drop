import './_checkbox.scss';

import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <div className={this.props.config.divName}>
        <h4>Check Box</h4>
        <input
          type='checkbox'
          name={this.props.config.name}
          id={this.props.config.id}
          defaultChecked={false}/>

        <label htmlFor={this.props.config.id} className={this.props.config.labelName} />

      </div>
    );
  }
}

export default Checkbox;
