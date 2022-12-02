import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    emailError && setEmailError("");
    passwordError && setPasswordError("");
  }, [email, password]);

  useEffect(() => {
    emailError && emailRef.current.focus();
    passwordError && passwordRef.current.focus();
  }, [emailError, passwordError]);

  const validateInput = () => {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
      setEmailError("Email is required");
      return;
    }
    if (!email.match(emailFormat)) {
      setEmailError("Please enter a valid email");
      return;
    }
    if (password === "") {
      setPasswordError("Password is required");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }
    setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInput();
    if (isValid) {
      console.log("email: ", email);
      console.log("password:", password);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
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
          isInvalid={!!passwordError}
        />
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>
      <p className="small d-flex justify-content-end">
        <Link to="/forgot-password" className="text-primary fw-bold">
          Forgot Password?
        </Link>
      </p>
      <div className=" d-flex justify-content-center align-items-center ">
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
