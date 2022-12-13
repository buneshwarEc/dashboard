import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Image,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import styles from "./UserProfile.module.css";
import {
  getHospitalDataAction,
  getUserDetailsAction,
  updateUserDetailsAction,
} from "../../store/User";
import { API } from "../../utils/https";
import DropDown from "components/UI/DropDown";

const tempHospitalList = [
  { id: 1, name: "Hospital 1" },
  { id: 2, name: "Hospital 2" },
  { id: 3, name: "Hospital 3" },
  { id: 4, name: "Hospital 4" },
];

const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    id: "",
    name: "",
    emailId: "",
    updateImage: "",
    image: "",
    hospitalName: "",
    mobileNo: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [isEdited, setIsEdited] = useState({
    hospitalName: false,
    mobileNo: false,
    address: false,
    city: false,
    country: false,
    postalCode: false,
    image: false,
  });
  const [selectedHospitalName, setSelectedHospitalName] =
    useState("Select a Hospital");

  const data = useSelector((state) => state?.User?.UserDetails?.employee) ?? [];
  const HospitalData = useSelector((state) => state?.User?.HospitalData);
  const token = useSelector((state) => state?.Auth?.token);
  const dispatch = useDispatch();
  const imageInputRef = useRef();

  useEffect(() => {
    isLoading && getUserDetails();
    // setIsLoading(false);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [isLoading]);

  console.log("HospitalData : ", HospitalData);

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
    // dispatch(getUserDetailsAction(token));
    // dispatch(getHospitalDataAction(token));
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

  const updateData = () => {
    // Post data to server when Fields are edited
    let updatedData = {
      updated_At: moment().format(),
    };
    isEdited.mobileNo &&
      (updatedData = { ...updatedData, MobileNo: user.mobileNo });
    isEdited.address &&
      (updatedData = { ...updatedData, Address: user.address });
    isEdited.city && (updatedData = { ...updatedData, City: user.city });
    isEdited.country &&
      (updatedData = { ...updatedData, Country: user.country });
    isEdited.postalCode &&
      (updatedData = { ...updatedData, Postal_Code: user.postalCode });
    isEdited.image &&
      (updatedData = { ...updatedData, User_Profile_image: user.image });
    if (
      selectedHospitalName !== "Select a Hospital" &&
      selectedHospitalName !== user.hospitalName &&
      user.hospitalName === ""
    ) {
      updatedData = { ...updatedData, Hospital_Name: selectedHospitalName };
      user.hospitalName = selectedHospitalName;
    } else if (user.hospitalName !== "" && isEdited.hospitalName) {
      updatedData = { ...updatedData, Hospital_Name: user.hospitalName };
    }

    return updatedData;
  };

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    let updatedData = updateData();
    if (Object.keys(updatedData).length === 1) {
      console.log("No Data to Update");
      return;
    }
    // console.log("updatedData", updatedData);
    // dispatch(updateUserDetailsAction(token, updatedData));
    setUser({ ...user, updateImage: "" });
    setIsEdited({
      hospitalName: false,
      mobileNo: false,
      address: false,
      city: false,
      country: false,
      postalCode: false,
      image: false,
    });
    setIsLoading(true);
  };

  const profilePicSrc = user.updateImage
    ? user.updateImage
    : user.image
    ? API + user.image
    : require("../../assets/img/placeholder.jpg");

  // console.log("image", user.image);

  return (
    <>
      <Container fluid>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row>
            <Col md="12 ">
              <Card className={[styles.cardContainer] + " " + "card-user"}>
                <Card.Header>
                  <Card.Title as="h4">Edit Profile</Card.Title>
                </Card.Header>

                <Card.Body>
                  <div className="author d-flex justify-content-end justify-content-sm-center  ">
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
                    </figure>
                  </div>
                  <Form className="p-1" onSubmit={handleUpdateBtn}>
                    <Row>
                      <Col className="px-2" md="6">
                        <Form.Group className={styles.formGroup}>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Form.Control
                            placeholder="Email"
                            type="email"
                            name="emailId"
                            value={user.emailId ?? ""}
                            plaintext
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>

                      <Col className="px-2" md="6">
                        <Form.Group className={styles.formGroup}>
                          <label>Name</label>
                          <Form.Control
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={user.name ?? ""}
                            plaintext
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="px-1" md="5">
                        <div className="formGroup">
                          <DropDown
                            label="Hospital Name"
                            items={tempHospitalList}
                            selectedItem={selectedHospitalName}
                            setSelectedItem={setSelectedHospitalName}
                          />
                        </div>
                      </Col>
                      <Col md="2">
                        <div
                          className="formGroup pt-md-4"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "0.5rem",
                          }}
                        >
                          <p>OR</p>
                        </div>
                      </Col>
                      <Col className="px-1" md="5">
                        <Form.Group className={styles.formGroup}>
                          <label>Hospital Name</label>
                          <Form.Control
                            className={styles.formControl}
                            placeholder="Hospital Name"
                            type="text"
                            name="hospitalName"
                            value={user.hospitalName ?? ""}
                            onChange={handleFormInput}
                            onBlur={() => {
                              setSelectedHospitalName("Select a Hospital");
                            }}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="px-2" md="8">
                        <Form.Group className={styles.formGroup}>
                          <label>Address</label>
                          <Form.Control
                            className={styles.formControl}
                            placeholder="Address"
                            value={user.address ?? ""}
                            name="address"
                            type="text"
                            onChange={handleFormInput}
                          ></Form.Control>
                        </Form.Group>
                      </Col>

                      <Col className="px-2" md="4">
                        <Form.Group className={styles.formGroup}>
                          <label>Mobile No</label>
                          <Form.Control
                            className={styles.formControl}
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
                        <Form.Group className={styles.formGroup}>
                          <label>City</label>
                          <Form.Control
                            className={styles.formControl}
                            placeholder="City"
                            value={user.city ?? ""}
                            name="city"
                            type="text"
                            onChange={handleFormInput}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-2" md="4">
                        <Form.Group className={styles.formGroup}>
                          <label>Country</label>
                          <Form.Control
                            className={styles.formControl}
                            placeholder="Country"
                            type="text"
                            name="country"
                            value={user.country ?? ""}
                            onChange={handleFormInput}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-2" md="4">
                        <Form.Group className={styles.formGroup}>
                          <label>Postal Code</label>
                          <Form.Control
                            className={styles.formControl}
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
        )}
      </Container>
    </>
  );
};

export default User;
