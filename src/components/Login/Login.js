import React, { useEffect, useRef, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Image,
} from "react-bootstrap";

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("email: ", email);
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow ">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="d-flex justify-content-center mb-3 ">
                    <Image
                      src={require("../../assets/img/logo.jpg")}
                      className="img-fluid"
                      style={{ width: "20rem" }}
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          autoComplete="off"
                          ref={emailRef}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small d-flex justify-content-end">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className=" d-flex justify-content-center align-items-center ">
                        <Button variant="primary" type="button">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
