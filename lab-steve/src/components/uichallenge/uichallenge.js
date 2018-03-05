import React from 'react';
import Input from '../form-elements/input/input';

class UiChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // Binding Handlers
    Object.getOwnPropertyNames(UiChallenge.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <section className='ui-challenge'>
        <h1>UI Challenge</h1>
        <form className='ui-challenge-form' noValidate onSubmit={this.handleSubmit}>
          <div className='form-section'>
            <Input config={{
              attrs: {
                name: 'inputwovalidate',
                type: 'text',
                className: 'input-wo-validate',
                placeholder: 'Name',
              },
              title: 'Non Validating Textbox',
            }}
            />
          </div>

          <div className='form-section'>
            <Input config={{
              attrs: {
                name: 'inputwvalidate',
                type: 'text',
                className: 'input-w-validate',
                placeholder: 'Username',
                pattern: '[a-zA-Z0-9_-]*',
              },
              title: 'Validating Textbox',
              validate: {
                errorStr: 'please enter a valid username',
              },
            }}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default UiChallenge;
