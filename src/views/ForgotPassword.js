import React, { useRef, useState } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Form,
  Card,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center py-2">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow ">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="d-flex justify-content-center mb-3 ">
                    <Image
                      src={require("../assets/img/logo.jpg")}
                      className="img-fluid"
                      style={{ width: "20rem" }}
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          ref={emailRef}
                          autoComplete="off"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email"
                          isInvalid={!!emailError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {emailError}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className=" d-flex justify-content-center align-items-center ">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgotPassword;
