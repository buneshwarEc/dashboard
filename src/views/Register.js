import RegisterCard from "components/Register/RegisterCard";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center py-2">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <RegisterCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
