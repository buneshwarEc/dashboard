import React, { useEffect, useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getUserDetailsAction } from "../store/User";

const User = () => {
  const data = useSelector((state) => state?.User?.UserDetails?.employee) ?? [];
  const token = useSelector((state) => state?.Auth?.token);

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: "",
    name: "",
    emailId: "",
    image: "",
    mobileNo: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    if (data && data.length != 0) {
      setUser({
        id: data[0].User_Id ?? "",
        name: data[0].User_Full_Name ?? "",
        emailId: data[0].Email_Id ?? "",
        image: data[0].user_image ?? "",
        mobileNo: data[0].MobileNo ?? "",
        address: data[0].Address ?? "",
        city: data[0].City ?? "",
        country: data[0].Country ?? "",
        postal_Code: data[0].Postal_Code ?? "",
      });
    }
  }, [data]);

  const getUserDetails = () => {
    dispatch(getUserDetailsAction(token));
  };

  const handleFormInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    console.log("Update");
    console.log("User : ", user);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12 ">
            <Card className="card-user">
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="author d-flex justify-content-end justify-content-sm-center  ">
                  {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                  <figure style={{ position: "relative" }}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    />
                    {/* <div
                      style={{
                        position: "absolute",
                        left: "6.5rem",
                        top: "5rem",
                        zIndex: "1",
                      }}
                    >
                      <img
                        src={require("assets/img/cameraIcon.png")}
                        // className="border-gray"
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      />
                    </div> */}
                    <figcaption className=" title">{user.name}</figcaption>
                  </figure>
                </div>
                <Form onSubmit={handleUpdateBtn}>
                  <Row>
                    <Col className="px-2" md="5">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                          name="emailId"
                          value={user.emailId ?? ""}
                          disabled={true}
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="px-2" md="7">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          placeholder="Name"
                          type="text"
                          name="name"
                          value={user.name ?? ""}
                          onChange={handleFormInput}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="px-2" md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          placeholder="Address"
                          value={user.address ?? ""}
                          name="address"
                          type="text"
                          onChange={handleFormInput}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          placeholder="City"
                          value={user.city ?? ""}
                          name="city"
                          type="text"
                          onChange={handleFormInput}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-2" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          placeholder="Country"
                          type="text"
                          name="country"
                          value={user.country ?? ""}
                          onChange={handleFormInput}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-2" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          name="postalCode"
                          value={user.postalCode ?? ""}
                          type="number"
                          onChange={handleFormInput}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="mt-3 mb-2 d-flex justify-content-center">
                    <Button
                      className="btn-fill pull"
                      type="submit"
                      variant="info"
                    >
                      Update Profile
                    </Button>
                  </div>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
