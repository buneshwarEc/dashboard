import React from "react";
import { Col, Row, Container, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
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
                    <LoginForm />
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

export default Login;
