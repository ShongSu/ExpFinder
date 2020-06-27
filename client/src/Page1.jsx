import React from 'react';
import PropTypes from 'prop-types';

export default class Page1 extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div style={{background:"AliceBlue", height: '1000px', flex:1, display:'flex', justifyContent:'center', paddingTop: '50px'}}>
            This is the Page 1
        </div>) 
    }
  }
  
  Page1.propTypes = {
  };