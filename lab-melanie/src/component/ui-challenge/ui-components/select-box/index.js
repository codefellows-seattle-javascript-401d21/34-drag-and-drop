import './_select-box.scss';
import React from 'react';

class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.setState({
      select: !this.state.select,
    });
  }

  render() {
    return (
      <div className="select-box">
        <label>select box</label>
        <input onClick={this.handleSelect} className={this.state.select ? 'up' : 'down'}/>
        <div className="sprite"></div>
        <ul className={this.state.select ? 'open' : 'closed'}>
          <li onClick={this.handleSelect}>option 1</li>
          <li onClick={this.handleSelect}>option 2</li>
          <li onClick={this.handleSelect}>option 3</li>
          <li onClick={this.handleSelect}>option 4</li>
          <li onClick={this.handleSelect}>option 5</li>
        </ul>

      </div>
    );
  }
}

export default SelectBox;
