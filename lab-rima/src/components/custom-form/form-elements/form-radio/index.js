import './_radio.scss';

import React from 'react';


class Radio extends React.Component{
  render(){
    return(
      <div>
        <img
          className={this.props.config.className} />
      </div>
    );
  };
};

export default Radio;
