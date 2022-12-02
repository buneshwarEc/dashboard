import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import LoginCard from "components/Login/LoginCard";

const Login = () => {
  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <LoginCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
