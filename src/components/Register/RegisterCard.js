import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import RegisterForm from "./RegisterForm";

const RegisterCard = () => {
  return (
    <Card className="shadow ">
      <Card.Body>
        <div className="mb-3 mt-md-1">
          <div className="d-flex justify-content-center mb-2 ">
            <Image
              src={require("../../assets/img/logo.jpg")}
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
  );
};

export default RegisterCard;
