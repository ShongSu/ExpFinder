import React from 'react';
import PropTypes from 'prop-types';

export default class Page2 extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div style={{background:"GhostWhite", height: '1000px', flex:1, display:'flex', justifyContent:'center', paddingTop: '50px'}}>
            This is the Page 2
        </div>)
    }
  }
  
  Page2.propTypes = {
  };