import React from 'react';
import './_select.scss';

class CustomSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      custom_list: {
        text: '',
        value: '',
      },
      custom_select_checked: '',
    };

    this.selectOption = this.selectOption.bind(this);
    this.selectToggle = this.selectToggle.bind(this);

  }

  selectOption(e){
    e.stopPropagation();
    let checked = this.state.custom_select_checked ? '' : 'checked';
    let values = JSON.parse(e.target.value);
    this.setState(
      {custom_list: values,
        custom_select_checked: checked,
      }
    );
    
    e.target.name = this.props.config.name;
    e.target.value = values.value;
    this.props.config.onChange(e);
  }

  selectToggle(){
    let checked = this.state.custom_select_checked ? '' : 'checked';
    this.setState({custom_select_checked: checked});
  }

  render(){
    return (
      <div className="custom-select-wrap">
        <input type="checkbox" 
          name={`${this.props.config.name}-custom-select-checkbox`} 
          id={`${this.props.config.name}-custom-select-checkbox`} 
          className="custom-select-checkbox"
          checked={this.state.custom_select_checked}
          onClick={this.selectToggle} />
        <label htmlFor={`${this.props.config.name}-custom-select-checkbox`} >
          <span className='custom-select-turn'></span>
          <input type="text" 
            className={`${this.props.config.class} custom-select-text`}
            name={`${this.props.config.name}-custom-select-text`} 
            id={`${this.props.config.name}-custom-select-text`}  
            placeholder={this.props.config.placeholder} 
            value={this.state.custom_list.text} />
        </label>
        <ul className="custom-select-list" id={`${this.props.config.name}-custom-select-list`}>
          <li key='default_selection' className="custom-select-list-item">
            <input type="radio"
              className="custom-select-item-radio"
              name="custom-select-item-radio" 
              id={`${this.props.config.name}-custom-select-item-radio-default_selection`}
              value={JSON.stringify({value: '', text: ''})}
              onClick={this.selectOption}/>
            <label htmlFor={`${this.props.config.name}-custom-select-item-radio-default_selection`}>{this.props.config.reset_msg}</label>
          </li>

          {this.props.config.options.map((optionVal, i) => (
            <li key={optionVal.text} className="custom-select-list-item">
              <input type="radio"
                className="custom-select-item-radio"
                name="custom-select-item-radio" 
                id={`custom-select-item-radio-${this.props.config.name}-${i}`}
                value={JSON.stringify(optionVal)} 
                onClick={this.selectOption}/>
              <label htmlFor={`custom-select-item-radio-${this.props.config.name}-${i}`}>{optionVal.text}</label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default CustomSelect;