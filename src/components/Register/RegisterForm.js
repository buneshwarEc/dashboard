import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

const RegisterForm = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(() => {
    userNameError && setUserNameError("");
    emailError && setEmailError("");
    passwordError && setPasswordError("");
    confirmPasswordError && setConfirmPasswordError("");
  }, [email, password, confirmPassword, userName]);

  useEffect(() => {
    userNameError && userNameRef.current.focus();
    emailError && emailRef.current.focus();
    passwordError && passwordRef.current.focus();
    confirmPasswordError && confirmPasswordRef.current.focus();
  }, [emailError, passwordError]);

  const validateInput = () => {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userName === "") {
      setUserNameError("Username is required");
    }
    if (email === "") {
      setUserNameError("Email is required");
    } else if (!email.match(emailFormat)) {
      setEmailError("Please enter a valid email");
    }
    if (password === "") {
      setPasswordError("Password is required");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    }
    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm Password is required");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Password and Confirm Password must be same");
    } else {
      setIsValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInput();
    if (isValid) {
      console.log("username: ", userName);
      console.log("email: ", email);
      console.log("password:", password);
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label className="text-center">Name</Form.Label>
        <Form.Control
          type="text"
          ref={userNameRef}
          autoComplete="off"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Name"
          isInvalid={!!userNameError}
        />
        <Form.Control.Feedback type="invalid">
          {userNameError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-center">Email address</Form.Label>
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          ref={passwordRef}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          isInvalid={passwordError}
        />
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          ref={confirmPasswordRef}
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          isInvalid={!!confirmPasswordError}
        />
        <Form.Control.Feedback type="invalid">
          {confirmPasswordError}
        </Form.Control.Feedback>
      </Form.Group>

      <div className=" d-flex justify-content-center align-items-center ">
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
