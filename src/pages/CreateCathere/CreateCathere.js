import React, { useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import styles from "./CreateCathere.module.css";
import DropDown from "../../components/UI/DropDown";
import { useRef } from "react";

const tempPhysician = [
  {
    id: 1,
    name: "Physician 1",
  },
  {
    id: 2,
    name: "Physician 2",
  },
  {
    id: 3,
    name: "Physician 3",
  },
];

const exchangeData = [
  {
    id: 1,
    name: "Yes",
  },
  {
    id: 2,
    name: "No",
  },
];

const CreateCathere = () => {
  const [selectPhysician, setSelectPhysician] = useState("Select a Physician");
  const [selectExchange, setSelectExchange] = useState("No");
  const [pcnCatheterData, setPcnCatheterData] = useState({
    size: "",
    location: "",
  });
  const [pcnCatheterDataError, setPcnCatheterDataError] = useState({
    datePlacedError: "",
    physicianError: "",
    sizeError: "",
    locationError: "",
    followUpError: "",
  });

  // const dateRef = useRef(null);
  // const followUpRef = useRef(null);

  // const datePlaced = dateRef.current.value;
  // const followUp = followUpRef.current.value;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPcnCatheterData({ ...pcnCatheterData, [name]: value });
    setPcnCatheterDataError({ ...pcnCatheterDataError, [name + "Error"]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const { size, location } = pcnCatheterData;

    // if (dateRef.current.value === "") {
    //   newErrors.datePlacedError = "Date placed is required";
    // }
    if (selectPhysician === "Select a Physician") {
      newErrors.physicianError = "Physician is required";
    }
    if (size === "") {
      newErrors.sizeError = "Size is required";
    }
    if (location === "") {
      newErrors.locationError = "Location is required";
    }
    // if (followUpRef.current.value === "") {
    //   newErrors.followUpError = "Follow up is required";
    // }
    return newErrors;
  };

  const onSubmitHandler = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setPcnCatheterDataError(errors);
      return;
    }
    console.log("Form Submitted");
    console.log(pcnCatheterData);
    console.log(selectPhysician);
    console.log(selectExchange);
    // console.log("datePlaced", dateRef.current.value);
    // console.log("followUp", followUpRef.current.value);
  };

  const onResetHandler = () => {
    console.log("Form Reset");
    setPcnCatheterData({
      size: "",
      location: "",
    });
    setPcnCatheterDataError({
      datePlacedError: "",
      physicianError: "",
      sizeError: "",
      locationError: "",
      followUpError: "",
    });
    // dateRef.current.value = "";
    // followUpRef.current.value = "";
    setSelectPhysician("Select a Physician");
    setSelectExchange("No");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className={styles.cardContainer}>
              <Card.Header>
                <Card.Title as="h5">
                  Create Percutaneous nephrostomy(PCN)
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form className="px-2">
                  <Row>
                    <Col className="px-2" md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="datePlace">Date place</label>
                        <Form.Control
                          className={styles.formControl}
                          id="datePlace"
                          type="date"
                          name="datePlaced"
                          // onChange={handleInput}
                          // ref={dateRef}
                          // value={pcnCatheterData.datePlaced ?? ""}
                          isInvalid={!!pcnCatheterDataError.datePlacedError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {pcnCatheterDataError.datePlacedError}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col className="px-2" md="6">
                      <div className="formGroup">
                        <DropDown
                          label="Physician"
                          items={tempPhysician}
                          selectedItem={selectPhysician}
                          setSelectedItem={setSelectPhysician}
                          isInvalid={!!pcnCatheterDataError.physicianError}
                          errorMsg={pcnCatheterDataError.physicianError}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 " md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="size">Size</label>
                        <Form.Control
                          className={styles.formControl}
                          id="size"
                          placeholder="Size"
                          name="size"
                          type="text"
                          value={pcnCatheterData.size ?? ""}
                          onChange={handleInput}
                          isInvalid={!!pcnCatheterDataError.sizeError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {pcnCatheterDataError.sizeError}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col className="px-2" md="6">
                      <div className="formGroup">
                        <DropDown
                          label="Exchange"
                          items={exchangeData}
                          selectedItem={selectExchange}
                          setSelectedItem={setSelectExchange}
                          isInvalid={!!pcnCatheterDataError.exchangeError}
                          errorMsg={pcnCatheterDataError.exchangeError}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 " md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="location">Location</label>
                        <Form.Control
                          className={styles.formControl}
                          id="location"
                          placeholder="Location"
                          name="location"
                          type="text"
                          value={pcnCatheterData.location ?? ""}
                          onChange={handleInput}
                          isInvalid={!!pcnCatheterDataError.locationError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {pcnCatheterDataError.locationError}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col className="px-2 pd-1" md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="followUp">Follow Up</label>
                        <Form.Control
                          className={styles.formControl}
                          // ref={followUpRef}
                          id="followUp"
                          type="date"
                          name="followUp"
                          // onChange={handleInput}
                          isInvalid={!!pcnCatheterDataError.followUpError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {pcnCatheterDataError.followUpError}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
                <div className={styles.buttonContainer}>
                  <div>
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="success"
                      onClick={onSubmitHandler}
                    >
                      Submit
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="btn-fill pull-right"
                      type="reset"
                      variant="danger"
                      onClick={onResetHandler}
                    >
                      Reset
                    </Button>
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

export default CreateCathere;
