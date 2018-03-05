import React from 'react';
import Input from '../form-elements/input/input';
import './_uichallenge.scss';

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
        <h1 className='page-title'>UI Challenge</h1>
        <form className='ui-challenge-form' noValidate onSubmit={this.handleSubmit}>
          <div className='form-section'>
            <Input config={{
              title: 'Non Validating Textbox',
              attrs: {
                name: 'inputwovalidate',
                type: 'text',
                className: 'input-wo-validate',
                placeholder: 'Name',
              },
            }}
            />
          </div>

          <div className='form-section'>
            <Input config={{
              title: 'Validating Textbox',
              attrs: {
                name: 'inputwvalidate',
                type: 'text',
                className: 'input-w-validate',
                placeholder: 'Username',
                pattern: '[a-zA-Z0-9_-]*',
              },
              validate: {
                errorStr: 'please enter a valid username',
              },
            }}
            />
          </div>

          <div className='form-section'>
            <Input config={{
              title: 'Text Boxes',
              attrs: {
                id: 'cbox-left',
                name: 'cboxleft',
                type: 'checkbox',
                defaultChecked: true,
              },
              forLabel: true,
            }}
            />
            <Input config={{
              attrs: {
                id: 'cbox-right',
                name: 'cboxright',
                type: 'checkbox',
                defaultChecked: false,
              },
              forLabel: true,
            }}
            />
          </div>

          <div className='form-section'>
            <Input config={{
              title: 'Radio buttons',
              attrs: {
                id: 'radio-left',
                name: 'radioleft',
                type: 'radio',
                defaultChecked: true,
              },
              forLabel: true,
            }}
            />
            <Input config={{
              attrs: {
                id: 'cbox-right',
                name: 'radioright',
                type: 'radio',
                defaultChecked: false,
              },
              forLabel: true,
            }}
            />
          </div>

          <div className='form-section'>
            <Input config={{
              title: 'Buttons',
              attrs: {
                name: 'btnleft',
                type: 'button',
                className: 'col-1-btn',
                value: 'submit',
              },
            }}
            />
            <Input config={{
              attrs: {
                name: 'btnright',
                type: 'button',
                className: 'col-2-btn',
                value: 'submit',
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
