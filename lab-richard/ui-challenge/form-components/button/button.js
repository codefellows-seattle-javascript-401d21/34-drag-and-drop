import './button.scss';
import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button
                    className={this.props.config.className}
                    type='submit'
                    name={this.props.config.name}
                    onChange={this.props.onChange}>
                    {this.props.config.buttonText}
                </button>
            </div>
        );
    }
}

export default Button;
