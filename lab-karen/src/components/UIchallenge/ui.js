// import '../../../styles/reset.scss';
// import '../../../styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import FormInput from './form-elements/input/input';

class UIchallenge extends React.Component {
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
      <div className="challenge">
        <h1>UI Challenge</h1>
        <h3>Custom form elements</h3>

        <div className="textbox-container">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              config={({
                className: 'form-inputs',
                name: 'title',
                value: this.state.title,
                type: 'text',
                placeholder: 'enter username',
              })}
              onChange={this.handleChange}/>
          </form>
        </div>

        <Button
          config={({
            id: 'button-one',
            className: 'buttons',
            name: 'button-one',
          })}
          onChange={this.handleSubmit}/>

      </div>
    );
  }
}
export default UIchallenge;
