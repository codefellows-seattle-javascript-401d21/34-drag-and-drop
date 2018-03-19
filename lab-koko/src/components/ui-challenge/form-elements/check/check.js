import './check.scss';
import React from 'react';
class CheckBox extends React.Component {
  render() { 
    return ( 
      <div className = {this.props.config.divname}>
        <h3>checkbox</h3>
        <input 
          id={this.props.config.id}
          type={this.props.config.type}
          onChange={this.props.config.onChange}
          value={this.props.config.value}
        />
        <label htmlFor={this.props.config.id} className = {this.props.config.className}/>
      </div>
    );
  }
}
export default CheckBox;