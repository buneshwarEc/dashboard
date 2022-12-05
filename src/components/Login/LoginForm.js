import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [loginDetailsError, setLoginDetailsError] = useState({
    emailError: "",
    passwordError: "",
  });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
    setLoginDetailsError({ ...loginDetailsError, [name + "Error"]: "" });
  };

  const validateForm = () => {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErrors = {};
    const { email, password } = loginDetails;
    ``;
    if (!email.match(emailFormat)) {
      newErrors.emailError = "Please enter a valid email";
    }
    if (password.length < 8) {
      newErrors.passwordError = "Password must be at least 8 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setLoginDetailsError(newErrors);
      return;
    }
    console.log("Login details: ", loginDetails);
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
          name="email"
          value={loginDetails.email}
          onChange={handleInput}
          placeholder="Enter email"
          isInvalid={!!loginDetailsError.emailError}
        />
        <Form.Control.Feedback type="invalid">
          {loginDetailsError.emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          ref={passwordRef}
          required
          name="password"
          value={loginDetails.password}
          onChange={handleInput}
          placeholder="Password"
          isInvalid={!!loginDetailsError.passwordError}
        />
        <Form.Control.Feedback type="invalid">
          {loginDetailsError.passwordError}
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
