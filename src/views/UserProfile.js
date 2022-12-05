import React from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

const User = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12 ">
            <Card className="card-user">
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="author d-flex justify-content-center align">
                  {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                  <figure style={{ position: "relative" }}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    />
                    {/* <div
                      style={{
                        position: "absolute",
                        left: "6.5rem",
                        top: "5rem",
                        zIndex: "1",
                      }}
                    >
                      <img
                        src={require("assets/img/cameraIcon.png")}
                        // className="border-gray"
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      />
                    </div> */}
                    <figcaption class=" title">Mike Andrew</figcaption>
                  </figure>
                </div>
                <Form>
                  <Row>
                    {/* <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                    {/* <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                    <Col className="px-2" md="5">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                          disabled={true}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    {/* <Row> */}
                    {/* <Col className="pr-1" md="6">
                      <Form.Group>
                      <label>First Name</label>
                      <Form.Control
                      defaultValue="Mike"
                      placeholder="Company"
                      type="text"
                      ></Form.Control>
                      </Form.Group>
                    </Col> */}
                    <Col className="px-2" md="7">
                      <Form.Group>
                        <label> Name</label>
                        <Form.Control
                          placeholder="Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* </Row> */}
                  <Row>
                    <Col className="px-2" md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-2" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-2" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="mt-3 mb-2 d-flex justify-content-center">
                    <Button
                      className="btn-fill pull"
                      type="submit"
                      variant="info"
                    >
                      Update Profile
                    </Button>
                  </div>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
