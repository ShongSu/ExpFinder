import React from 'react';

export default class Homepage extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div style={{background:"Plum", height: '1000px', flex:1, display:'flex', justifyContent:'center', paddingTop: '50px'}}>
            This is the homepage
        </div>)
    }
  }
  
  Homepage.propTypes = {
  };