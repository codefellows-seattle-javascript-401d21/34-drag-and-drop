import './_select.scss';

import React from 'react';

class Select extends React.Component {
  render () {
    return (
      <div className="outside-box">
        <h4>Select Box</h4>
        <div tabIndex="0" className="onclick-menu">{this.props.config.menuName}
          <div className="drop-image" />
          <ul className="menu-content">
            <li className="light"><button
              type="submit"
              value={this.props.config.item1}
              name='dropDown'
              onClick={this.props.onChange}
            >{this.props.config.item1}</button></li>

            <li className="dark"><button
              type="submit"
              value={this.props.config.item2}
              name='dropDown'
              onClick={this.props.onChange}
            >{this.props.config.item2}</button></li>

            <li className="light"><button
              type="submit"
              value={this.props.config.item3}
              name='dropDown'
              onClick={this.props.onChange}
            >{this.props.config.item3}</button></li>

            <li className="dark"><button
              type="submit"
              value={this.props.config.item4}
              name='dropDown'
              onClick={this.props.onChange}
            >{this.props.config.item4}</button></li>

            <li className="light"><button
              type="submit"
              value={this.props.config.item5}
              name='dropDown'
              onClick={this.props.onChange}
            >{this.props.config.item5}</button></li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Select;
