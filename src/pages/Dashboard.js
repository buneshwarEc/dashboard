import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={4} md={6}>
            <Card className="card-stats">
              <Card.Header> Active Drain </Card.Header>
              <Card.Body>
                <Row>
                  <Image
                    src={require("../assets/img/activeDrain.jpg")}
                    style={{ width: "18rem", height: "10rem", margin: "auto" }}
                    fluid
                  />
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="card-stats">
              <Card.Header> Tracker </Card.Header>
              <Card.Body>
                <Row>
                  <Image
                    src={require("../assets/img/graph.png")}
                    style={{
                      width: "15rem",
                      height: "10rem",
                      margin: "auto",
                      padding: "10px",
                    }}
                  />
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="card-stats">
              <Card.Header> Old Drain</Card.Header>
              <Card.Body>
                <Row>
                  <Image
                    src={require("../assets/img/activeDrain.jpg")}
                    style={{ width: "18rem", height: "10rem", margin: "auto" }}
                    fluid
                  />
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
