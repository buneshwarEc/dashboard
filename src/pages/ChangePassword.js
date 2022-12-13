import React, { useEffect, useRef, useState } from "react";
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

const ChangePassword = () => {
  const oldPasswordRef = useRef();
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordDataError, setPasswordDataError] = useState({
    oldPasswordError: "",
    newPasswordError: "",
    confirmPasswordError: "",
  });

  useEffect(() => {
    oldPasswordRef.current.focus();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
    setPasswordDataError({ ...passwordDataError, [name + "Error"]: "" });
  };

  const inputValidation = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container>
        <Row className=" d-flex justify-content-center align-items-center py-2">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow ">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3 mx-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="password"
                          ref={oldPasswordRef}
                          autoComplete="off"
                          required
                          name="oldPassword"
                          value={passwordData.oldPassword}
                          onChange={handleInput}
                          placeholder="Old Password"
                          isInvalid={!!passwordDataError.oldPasswordError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {passwordDataError.oldPasswordError}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label>New Password</label>
                        <Form.Control
                          type="password"
                          autoComplete="off"
                          required
                          name="newPassword"
                          value={passwordData.newPassword}
                          onChange={handleInput}
                          placeholder="New Password"
                          isInvalid={!!passwordDataError.newPasswordError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {passwordDataError.newPasswordError}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Confirm Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          autoComplete="off"
                          required
                          name="confirmPassword"
                          value={passwordData.confirmPassword}
                          onChange={handleInput}
                          placeholder="Old Password"
                          isInvalid={!!passwordDataError.confirmPasswordError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {passwordDataError.confirmPasswordError}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className=" d-flex justify-content-center align-items-center ">
                        <Button variant="success" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
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

export default ChangePassword;
