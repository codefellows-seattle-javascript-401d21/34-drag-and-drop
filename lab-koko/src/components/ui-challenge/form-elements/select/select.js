import './select.scss';
import React from 'react';

class Select extends React.Component {
  
  render() { 
    return ( 
      <div id="title">
        <h3>select</h3>
        <div tabIndex="0" className="onclick-menu">{this.props.config.menuName}
          <label className="down-image"/>
          <ul className={this.props.config.classNameUl}>
            <li className={this.props.config.classNameLi}>
              <button 
                className={this.props.config.odd}
                className={this.props.config.buttonClass}
                type={this.props.config.type} 
                name={this.props.config.name}
                onClick={this.props.onChange}>
            option 1
              </button>
            </li>

            <li className={this.props.config.className}>
              <button
                className={this.props.config.even}
                className={this.props.config.buttonClass}
                type={this.props.config.type} 
                name={this.props.config.name}
                onClick={this.props.onChange}>
            option 2
              </button>
            </li>

            <li className={this.props.config.className}>
              <button
                className={this.props.config.odd}
                className={this.props.config.buttonClass}
                type={this.props.config.type} 
                name={this.props.config.name}
                onClick={this.props.onChange}>
            option 3
              </button>
            </li>

            <li className={this.props.config.className}>
              <button
                className={this.props.config.even}
                className={this.props.config.buttonClass}
                type={this.props.config.type} 
                name={this.props.config.name}
                onClick={this.props.onChange}>
            option 4
              </button>
            </li>

            <li className={this.props.config.className}>
              <button
                className={this.props.config.odd}
                className={this.props.config.buttonClass}
                type={this.props.config.type} 
                name={this.props.config.name}
                onClick={this.props.onChange}>
            option 5
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
} 
export default Select;