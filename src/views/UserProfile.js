import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../utils/https";

import { getUserDetailsAction, updateUserDetailsAction } from "../store/User";

const User = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    emailId: "",
    updateImage: "",
    image: "",
    mobileNo: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [isEdited, setIsEdited] = useState({
    mobileNo: false,
    address: false,
    city: false,
    country: false,
    postalCode: false,
    image: false,
  });

  const data = useSelector((state) => state?.User?.UserDetails?.employee) ?? [];
  const token = useSelector((state) => state?.Auth?.token);
  const dispatch = useDispatch();
  const imageInputRef = useRef();

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    if (data && data.length != 0) {
      // console.log("Data : ", data);
      console.log("ProfilePic : ", data[0].User_Profile_image);
      setUser({
        id: data[0].User_Id ?? "",
        name: data[0].User_Full_Name ?? "",
        emailId: data[0].Email_Id ?? "",
        image: data[0].User_Profile_image ?? "",
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
    setIsEdited({ ...isEdited, [e.target.name]: true });
  };

  const handleProfilePicUpload = () => {
    imageInputRef.current?.click();
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";

      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result.split(",")[1];

        // console.log("baseURL", baseURL);
        resolve(baseURL);
      };
      // console.log("fileInfo", fileInfo);
    });
  };

  const onImageChange = async (e) => {
    console.log("imageUpdate", e.target.files[0]);
    const file = e.target.files[0];
    let baseImage = await getBase64(file);
    // console.log("baseImage", baseImage);
    setUser({
      ...user,
      image: baseImage,
      updateImage: URL.createObjectURL(e.target.files[0]),
    });
    setIsEdited({ ...isEdited, image: true });
  };

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    console.log("Update");
    const updatedData = {
      // User_Profile_image: user.image,
      Address: user.address,
      City: user.city,
      Country: user.country,
      Postal_Code: user.postalCode,
      MobileNo: user.mobileNo,
      updated_At: moment().format(),
    };
    // console.log("Data : ", updatedData);
    // console.log("IsEdited : ", isEdited);
    dispatch(updateUserDetailsAction(token, updatedData));
  };

  const profilePicSrc = user.updateImage
    ? user.updateImage
    : user.image
    ? API + user.image
    : require("../assets/img/placeholder.jpg");

  // console.log("image", user.image);

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
                    <input
                      ref={imageInputRef}
                      type="file"
                      accept="image/png, image/jpeg"
                      name="image"
                      // value={user.image ?? ""}
                      className="d-none"
                      onChange={onImageChange}
                    />
                    <Image
                      alt="..."
                      className="avatar border-gray"
                      src={profilePicSrc}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "6.5rem",
                        top: "5rem",
                        zIndex: "1",
                      }}
                    >
                      <img
                        src={require("assets/img/cameraIcon.png")}
                        className="border-gray"
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                        onClick={handleProfilePicUpload}
                      />
                    </div>
                    {/* <figcaption className=" title">{user.name}</figcaption> */}
                  </figure>
                </div>
                <Form onSubmit={handleUpdateBtn}>
                  <Row>
                    <Col className="px-2" md="6">
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

                    <Col className="px-2" md="6">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          placeholder="Name"
                          type="text"
                          name="name"
                          value={user.name ?? ""}
                          // onChange={handleFormInput}
                          disabled={true}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="px-2" md="8">
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

                    <Col className="px-2" md="4">
                      <Form.Group>
                        <label>Mobile No</label>
                        <Form.Control
                          placeholder="Mobile No"
                          type="number"
                          name="mobileNo"
                          value={user.mobileNo ?? ""}
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
