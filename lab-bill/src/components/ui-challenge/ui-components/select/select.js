import './_select.scss';
import React from 'react';

class SelectBox extends React.Component {
  render() {
    return (
      <div>
        <input
          id="select-input"
          type='checkbox'
          onChange={this.props.onChange}
        />
        <label htmlFor="select-input">Select</label>
        <input
          id="select1"
          type='checkbox'
          onChange={this.props.onChange}
        />
        <label htmlFor="select1">Select</label>
        <input
          id="select2"
          type='checkbox'
          onChange={this.props.onChange}
        />
        <label htmlFor="select2">Select</label>
        <input
          id="select3"
          type='checkbox'
          onChange={this.props.onChange}
        />
        <label htmlFor="select3">Select</label>
        <input
          id="select4"
          type='checkbox'
          onChange={this.props.onChange}
        />
        <label htmlFor="select4">Select</label>
      </div>
    );
  }
}

export default SelectBox;