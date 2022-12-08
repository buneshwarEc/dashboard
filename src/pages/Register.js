import React from "react";
import { Col, Row, Container, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import RegisterForm from "../components/Register/RegisterForm";

const Register = () => {
  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center py-2">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow ">
              <Card.Body>
                <div className="mb-3 mt-md-1">
                  <div className="d-flex justify-content-center mb-2 ">
                    <Image
                      src={require("../assets/img/logo.jpg")}
                      className="img-fluid"
                      style={{ width: "18rem" }}
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <RegisterForm />
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary fw-bold">
                          Login
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

export default Register;
