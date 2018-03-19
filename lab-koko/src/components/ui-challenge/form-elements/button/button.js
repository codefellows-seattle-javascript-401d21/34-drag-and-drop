import './button.scss';
import React from 'react';

class Buttons extends React.Component {
  render() { 
    return ( 
      <div className = {this.props.config.divname}>
        <h3>button</h3>
        <button
          id={this.props.config.id}
          name= {this.props.config.name}
          type={this.props.config.type} 
          onSubmit={this.props.onSubmit}
          className={this.props.config.className}>
          {this.props.config.buttonText}
        </button>
        <label htmlFor={this.props.config.id} className={this.props.config.className}/>
      </div>
    );
  }
}
 
export default Buttons;