import React from 'react';
import './_challenge-form.scss';
import TextInput from '../text-input/index';
import SelectBox from '../select-box/index';
import CheckBox from '../checkbox/index';

class UIForm extends React.Component {
  render () {
    return (
      <div className='challenge-form'>
        <TextInput />
        <SelectBox />
        <CheckBox />
        
        
      </div>
    );
  }
}



export default UIForm;