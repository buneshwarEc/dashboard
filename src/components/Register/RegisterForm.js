import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { RegisterUserAction } from "../../store/Authentication";
import { getUserRollAction } from "../../store/User";

const RegisterForm = () => {
  const userNameRef = useRef();
  const userRoleData = useSelector((state) => state?.User?.UserRoll);

  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userDetailsError, setUserDetailsError] = useState({
    userNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    userNameRef.current.focus();
    dispatch(getUserRollAction());
  }, []);

  useEffect(() => {
    userRoleData.length > 0 && setUserRollId();
  }, [userRoleData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    setUserDetailsError({ ...userDetailsError, [name + "Error"]: "" });
  };

  const validateForm = () => {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErrors = {};
    const { userName, email, password, confirmPassword } = userDetails;

    if (userName === "") {
      newErrors.userNameError = "Username is required";
    }
    if (email === "") {
      newErrors.emailError = "Email is required";
    } else if (!email.match(emailFormat)) {
      newErrors.emailError = "Please enter a valid email";
    }
    if (password === "") {
      newErrors.passwordError = "Password is required";
    } else if (password.length < 8) {
      newErrors.passwordError = "Password must be at least 8 characters";
    }
    if (confirmPassword === "") {
      newErrors.confirmPasswordError = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      newErrors.confirmPasswordError =
        "Password and Confirm Password must be same";
    }
    console.log(newErrors);
    return newErrors;
  };

  const setUserRollId = () => {
    const userRoll = userRoleData.filter(
      (item) => item.User_role === "Patient"
    );
    setUserDetails({ ...userDetails, userRoleId: userRoll[0].id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setUserDetailsError(newErrors);
      return;
    }
    dispatch(RegisterUserAction(userDetails));
    setUserDetails({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
          name="userName"
          value={userDetails.userName}
          onChange={handleInput}
          placeholder="Enter Name"
          isInvalid={!!userDetailsError.userNameError}
        />
        <Form.Control.Feedback type="invalid">
          {userDetailsError.userNameError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-center">Email address</Form.Label>
        <Form.Control
          type="email"
          autoComplete="off"
          required
          name="email"
          value={userDetails.email}
          onChange={handleInput}
          placeholder="Enter email"
          isInvalid={!!userDetailsError.emailError}
        />
        <Form.Control.Feedback type="invalid">
          {userDetailsError.emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          required
          name="password"
          value={userDetails.password}
          onChange={handleInput}
          placeholder="Password"
          isInvalid={!!userDetailsError.passwordError}
        />
        <Form.Control.Feedback type="invalid">
          {userDetailsError.passwordError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          required
          name="confirmPassword"
          value={userDetails.confirmPassword}
          onChange={handleInput}
          placeholder="Confirm Password"
          isInvalid={!!userDetailsError.confirmPasswordError}
        />
        <Form.Control.Feedback type="invalid">
          {userDetailsError.confirmPasswordError}
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
