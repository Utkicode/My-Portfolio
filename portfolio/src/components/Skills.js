import * as React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  
} from "reactstrap";
 
const Skills = () => {
  return (
    <div>
      <h5
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "30px" }}
      >
        Skills
      </h5>
      {/* Row 1*/}
      <div >
        <div className="row">
          <div className="col-md-4">
            <Card
              className="outline-card"
              style={{ backgroundColor: "yellowGreen", borderRadius: "0" }}
            >
              <CardBody>
                <CardTitle tag="h5">Front-End</CardTitle>
                <div className="contianer">
                    <div className="row">
                        <div className="col-4">
                        <Button variant="contained">HTML 5</Button>
                        </div>
 
                        <div className="col-3">
                        <Button variant="contained">CSS 3</Button>
                        </div>
                        <div className="col-4">
                        <Button variant="contained">JavaScript</Button>
                        </div>
                    </div>

                </div>
               
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4 offset-md-4">
            <Card
              className="outline-card"
              style={{ backgroundColor: "yellowGreen" }}
            >
              <CardBody>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                {/*<CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
                <div>
                  <Button>Skill 1</Button>
                </div>
 
                <div>
                  <Button>Skill 2</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* Row 2*/}
        <div className="row align-items-center">
          <div className="col-md-4  offset-md-4">
            <Card
              className="outline-card"
              style={{ backgroundColor: "yellowGreen" }}
            >
              <CardBody>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                {/*<CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
                <div>
                  <Button>Skill 1</Button>
                </div>
 
                <div>
                  <Button>Skill 2</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
 
        {/* Row 3*/}
        <div className=" row align-items-end">
          <div className="col-md-4">
            <Card
              className="outline-card"
              style={{ backgroundColor: "yellowGreen" }}
            >
              <CardBody>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                {/*<CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
                <div>
                  <Button>Skill 1</Button>
                </div>
 
                <div>
                  <Button>Skill 2</Button>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4 offset-md-4">
            <Card
              className="outline-card"
              style={{ backgroundColor: "yellowGreen" }}
            >
              <CardBody>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                {/*<CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
                <div>
                  <Button>Skill 1</Button>
                </div>
 
                <div>
                  <Button>Skill 2</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Skills;