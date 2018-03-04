import React from 'react';
import './_challenge-form.scss';
import TextInput from '../text-input/index';
import SelectBox from '../select-box/index';
import CheckBox from '../checkbox/index';
import RadioButton from '../radio-button/index';
import Button from '../button/index';

class UIForm extends React.Component {
  render () {
    return (
      <div className='challenge-form'>
        <form onSubmit={this.handleSubmit}>
          <TextInput 
            config={({
              text: 'text input',
              className:'text-input',
              id:'text-input-nonvalidated',
            })}/>
          <TextInput 
            config={({
              text: 'text input w/ validation error',
              className:'text-input-validating',
              id:'text-input-validated',
            })}/>


          <SelectBox 
            config={({
              id: 'drop-down',
            })} />
          <CheckBox
            config={({
              title: 'checkbox',
              class:'check-box',
            })} />
          <RadioButton />
          <Button />      
        </form>  
      </div>
    );
  }
}



export default UIForm;