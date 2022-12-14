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

import styles from "./ChangePassword.module.css";

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

  const inputValidation = () => {
    let isValid = true;
    const { oldPassword, newPassword, confirmPassword } = passwordData;

    if (oldPassword.length < 6) {
      setPasswordDataError({
        ...passwordDataError,
        oldPasswordError: "Old password must be at least 6 characters",
      });
      isValid = false;
    }

    if (newPassword.length < 6) {
      setPasswordDataError({
        ...passwordDataError,
        newPasswordError: "New password must be at least 6 characters",
      });
      isValid = false;
    }

    if (confirmPassword.length < 6) {
      setPasswordDataError({
        ...passwordDataError,
        confirmPasswordError: "Confirm password must be at least 6 characters",
      });
      isValid = false;
    }

    if (newPassword !== confirmPassword) {
      setPasswordDataError({
        ...passwordDataError,
        confirmPasswordError: "Confirm password must be same as new password",
      });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = inputValidation();
    if (isValid === false) return;
    console.log(passwordData);
    console.log("Form submitted");
  };

  return (
    <>
      <Container>
        <Row className=" d-flex justify-content-center align-items-center py-2">
          <Col md={8}>
            <Card className={styles.cardContainer}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3 mx-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className={styles.formGroup}>
                        <label className="text-center">Email address</label>
                        <Form.Control
                          ref={oldPasswordRef}
                          className={styles.formControl}
                          type="password"
                          name="oldPassword"
                          placeholder="Old Password"
                          required
                          autoComplete="off"
                          value={passwordData.oldPassword}
                          onChange={handleInput}
                          isInvalid={!!passwordDataError.oldPasswordError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {passwordDataError.oldPasswordError}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className={styles.formGroup}>
                        <label>New Password</label>
                        <Form.Control
                          className={styles.formControl}
                          type="password"
                          name="newPassword"
                          placeholder="New Password"
                          autoComplete="off"
                          required
                          value={passwordData.newPassword}
                          onChange={handleInput}
                          isInvalid={!!passwordDataError.newPasswordError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {passwordDataError.newPasswordError}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className={styles.formGroup}>
                        <label className="text-center">Confirm Password</label>
                        <Form.Control
                          className={styles.formControl}
                          type="password"
                          name="confirmPassword"
                          placeholder="Old Password"
                          autoComplete="off"
                          required
                          value={passwordData.confirmPassword}
                          onChange={handleInput}
                          isInvalid={!!passwordDataError.confirmPasswordError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {passwordDataError.confirmPasswordError}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className=" d-flex justify-content-center align-items-center ">
                        <Button
                          className="btn-fill pull-right"
                          variant="success"
                          type="submit"
                        >
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
