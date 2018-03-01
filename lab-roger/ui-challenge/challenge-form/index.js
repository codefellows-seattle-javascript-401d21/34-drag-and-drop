import React from 'react';
import './_challenge-form.scss';
import TextInput from '../text-input/index';
import SelectBox from '../select-box/index';
import CheckBox from '../checkbox/index';

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
              text: 'text input',
              className:'text-input-validating',
              id:'text-input-validated',
            })}/>


          <SelectBox />
          <CheckBox />
        
        </form>  
      </div>
    );
  }
}



export default UIForm;