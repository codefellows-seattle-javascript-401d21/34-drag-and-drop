import './_checkbox.scss';
import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  render() {
    return (
      <div>
        <div className="checkbox">check box</div>
        <div className={this.state.checked ? 'check' : 'no-check'} onClick={this.handleChecked}></div>
      </div>
    );
  }
}

export default Checkbox;
