import React from 'react';
import ReactDom from 'react-dom';

import Button from './form-components/button/button.js';
import Checkbox from './form-components/checkbox/checkbox.js';
import Input from './form-components/input/input.js';
import Radio from './form-components/radio/radio.js';
import Select from './form-components/selectbox/selectbox.js';

class UI_Challenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            dropDown: '',
            checkbox: false,
            radio: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onComplete(this.state);
    }    

    render() {
        return  (
            <div className="UI-Challenge">
                <h1>UI Challenge - Custom Form Elements</h1>
                <div className="input-container">
                    <form on Submit={this.handleSubmit} noValidate>
                        <h2>text input</h2>
                        <FormInput
                            config={({
                                className: 'validated-input',
                                type: 'text',
                                name: 'title',
                                value: this.state.title,
                                placeholder: 'placeholder text',
                            })}
                            onChange={this.handleChange}/>
                    </form>
                </div>

                <h2>select box</h2>
                <Select
                    config={({
                        menuName: this.state.dropDown || 'please select an option...',
                        item1: 'option 1',
                        item2: 'option 2',
                        item3: 'option 3',
                        item4: 'option 4',
                        item5: 'option 5',
                    })}
                    onChange={this.handleChange}/>

                <h2>checkbox</h2>
                <Checkbox
                    config={({
                        divName: 'checkbox-div',
                        labelName: 'checkbox-label',
                        id: 'check-box',
                        name: 'checkbox',
                    })}/>

                <h2>radio</h2>
                <Radio
                    config={({
                        name: 'radio-btn',
                        divName: 'radio-btn-div',
                        labelName: 'radio-btn-label',
                        id: 'radio-button',
                    })}/>

                <h2>buttons</h2>
                <Button
                    config={({
                        className: 'buttons',
                        name: 'button-one',
                        text: 'submit',
                    })}/>
            </div>
        );
    }
}

export default UI_Challenge;