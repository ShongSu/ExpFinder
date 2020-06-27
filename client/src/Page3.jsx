import React from 'react';
import PropTypes from 'prop-types';

export default class Page3 extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div style={{background:"MistyRose", height: '1000px', flex:1, display:'flex', justifyContent:'center', paddingTop: '50px'}}>
            This is the Page 3
        </div>)
    }
  }
  
  Page3.propTypes = {
  };