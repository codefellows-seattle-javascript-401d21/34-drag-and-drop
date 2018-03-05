import './radio.scss';
import React from 'react';

class Radio extends React.Component {
  render() { 
    return ( 
      <div className={this.props.config.divname}>
        <input 
          name={this.props.config.name}
          type= 'radio'
          id={this.props.config.id}
          value={this.props.config.value}
        />
        <label htmlFor={this.props.config.id} className={this.props.config.className} />
      </div>
    );
  }
}
 
export default Radio;