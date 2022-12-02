import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

const LoginCard = () => {
  return (
    <Card className="shadow ">
      <Card.Body>
        <div className="mb-3 mt-md-4">
          <div className="d-flex justify-content-center mb-3 ">
            <Image
              src={require("../../assets/img/logo.jpg")}
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
  );
};

export default LoginCard;
