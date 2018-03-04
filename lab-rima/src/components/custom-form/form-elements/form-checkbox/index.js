import './_checkbox.scss';

import React from 'react';


class CheckBox extends React.Component{
  render(){
    return(
      <div>
        <img
          className={this.props.config.className} />
      </div>
    );
  };
};

export default CheckBox;
