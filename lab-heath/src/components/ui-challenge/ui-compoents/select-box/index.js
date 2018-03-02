import './_select-box.scss';

import React from 'react';

class SelectBox extends React.Component {
  render () {
    return (
      <div className="outside-box">
        <div tabIndex="0" className="onclick-menu">{this.props.config.menuName}
          <div className="drop-image" />
          <ul className="menu-content">
            <li className="box-item"><button>{this.props.config.item1}</button></li>
            <li className="box-item"><button>{this.props.config.item2}</button></li>
            <li className="box-item"><button>{this.props.config.item3}</button></li>
            <li className="box-item"><button>{this.props.config.item4}</button></li>
          
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectBox;

