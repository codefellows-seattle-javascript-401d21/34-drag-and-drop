import React from 'react';
import Input from '../form-elements/input/input';
import './_uichallenge.scss';

class UiChallenge extends React.Component {
  render() {
    return (
      <section className='container'>
        <h1 className='page-title'>UI Challenge</h1>
        <section className='ui-challenge'>
          <form className='ui-challenge-form' noValidate>
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

            <h4>Checkboxes</h4>
            <div className='form-section'>
              <Input config={{
                divClass: 'col-2-div',
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
                divClass: 'col-2-div',
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

            <h4>Radio buttons</h4>
            <div className='form-section'>
              <Input config={{
                divClass: 'col-2-div',
                attrs: {
                  id: 'radio-left',
                  name: 'radiobtn',
                  type: 'radio',
                  defaultChecked: true,
                },
                forLabel: true,
              }}
              />
              <Input config={{
                divClass: 'col-2-div',
                attrs: {
                  id: 'radio-right',
                  name: 'radiobtn',
                  type: 'radio',
                  defaultChecked: false,
                },
                forLabel: true,
              }}
              />
            </div>

            <h4>Buttons</h4>
            <div className='form-section'>
              <Input config={{
                divClass: 'col-2-div',
                attrs: {
                  name: 'btnleft',
                  type: 'button',
                  className: 'col-1-btn',
                  value: 'submit',
                },
              }}
              />
              <Input config={{
                divClass: 'col-2-div',
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
      </section>
    );
  }
}

export default UiChallenge;
