import React from 'react';
import PropTypes from 'prop-types';
import { Card }  from 'react-bootstrap';

export default class Page1 extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div style={{background:"AliceBlue", flex:1, display:'flex', justifyContent:'center', paddingTop: '50px', paddingLeft:'100px',paddingRight:'100px'}}>
            {/* <h1>List all jobs</h1> */}
            <div>
              <div style={{padding: "20px"}}>Search bar</div>
              <div style={{flex:1, display:'flex', justifyContent:'center', flexDirection:'row'}}>
                <div style={{flex:1,  padding: "20px"}}>filters</div>
                <div style={{flex:3,   padding: "20px"}}>
                <Card>
                  <Card.Body>
                    <Card.Title>Mobile Software Developer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Camcloud - Ottawa, ON</Card.Subtitle>
                    <Card.Text>
                    Camcloud is looking to hire a Mobile Software Developer to develop and enhance our cutting-edge mobile apps that are disrupting the video surveillance industry. Our apps are known for their ease-of-use and intuitive functionality, and are used by tens of thousands of businesses and consumers across North America. The right candidate will be comfortable working in a fast-paced start-up environment and will contribute to the development of both our Android and iOS mobile apps. We are looking for someone to join our team who is not only strong technically but is passionate about creating a first-class mobile experience for our users.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Software Developer In Test</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Cisco Systems - Kanata, ON</Card.Subtitle>
                    <Card.Text>
                    Cisco Ottawa is seeking an Intermediate Software Developer in Test (SDETs). As an engineer integrated into our development team responsible for programmability, you'll be expected to drive the functionality and quality of our current network programmatic APIs to the next level. In collaboration with your team and customers, you will design and implement test frameworks and methodologies that can be adopted across enterprise products. You will not be just a tester or a software engineer, but develop into a broad specialist who understands architecture, code structure, functionality, relevant automation frameworks and customer requirements. 
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
                </div>
              </div>
            </div>
        </div>) 
    }
  }
  
  Page1.propTypes = {
  };