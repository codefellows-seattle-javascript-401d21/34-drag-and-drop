import './button.scss';
import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button
                    className="btn"
                    type="submit"
                    name={this.props.config.name}
                    onChange={this.props.onChange}>
                    submit
                </button>
            </div>
        );
    }
}

export default Button;
