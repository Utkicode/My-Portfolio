import * as React from 'react';
import { Button, Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';
import Skills from './Skills';

const Resume = () => {
  return (
    <div>
      <span style={{textAlign:'center',marginTop: "50px", marginBottom: "30px", backgroundColor : "#00fe9c"}}>Resume</span>
      <h1>A Summary of my Resume</h1>

      <Card className="outline-box" style={{textAlign:'center',marginTop: "50px", marginBottom: "50px"}}>
        <CardBody>
          <Row>
            <Col sm="4">
              <Card className="outline-card">
                <CardBody>
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="outline-card">
                <CardBody>
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="outline-card">
                <CardBody>
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="outline-box" style={{textAlign:'center',marginTop: "50px", marginBottom: "50px"}}>
        <CardBody>
          <Row className="justify-content-center"> {/* Add this class to center-align the card */}
            <Col sm="4">
              <Card className="outline-card">
                <CardBody>
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Skills/>
      <Button color="info" style={{textAlign:'center',marginTop: "50px", marginBottom: "50px"}}>Download CV</Button>
      
    </div>
  );
};

export default Resume;