import React from 'react';
import Buttons from './ui-components/buttons/index';
import Checkbox from './ui-components/checkbox/index';
import Radio from './ui-components/radio/index';
import SelectBox from './ui-components/select-box/index';
import TextInput from './ui-components/text-input/index';

class UIChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div>
        <TextInput
          config={({
            id: 'validation',
            className: 'text-input',
            name: 'title',
            value: this.state.title,
            type: 'text',
            placeholder: 'placeholder text',
            pattern: '[a-z0-9]{4,8}',
          })}
          onChange={this.handleChange}/>
        {/* <SelectBox/>
        <Checkbox/>
        <Radio/> */}
        <Buttons/>
      </div>
    );
  }
}

export default UIChallenge;
