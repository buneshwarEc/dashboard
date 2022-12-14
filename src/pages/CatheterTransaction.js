import React, { useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import styles from "./CreateCathere/CreateCathere.module.css";
import DropDown from "../components/UI/DropDown";
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

const CatheterTransaction = () => {
  const [selectPhysician, setSelectPhysician] = useState("Select a Physician");
  const [selectMedicalDrainID, setSelectMedicalDrainID] = useState(
    "Select a Medical Drain ID"
  );
  const [selectCatheterID, setSelectCatheterID] = useState(
    "Select a Catheter ID"
  );
  const [selectHospital, setSelectHospital] = useState("Select a Hospital");
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
                <Card.Title as="h5"></Card.Title>
              </Card.Header>
              <Card.Body>
                <Form className="px-2">
                  <Row>
                    <Col className="px-2" md="6">
                      <div className="formGroup">
                        <DropDown
                          label="Medical Drain ID"
                          items={tempPhysician}
                          selectedItem={selectMedicalDrainID}
                          setSelectedItem={setSelectPhysician}
                          isInvalid={!!pcnCatheterDataError.physicianError}
                          errorMsg={pcnCatheterDataError.physicianError}
                        />
                      </div>
                    </Col>
                    <Col className="px-2" md="6">
                      <div className="formGroup">
                        <DropDown
                          label="Catheter ID"
                          items={tempPhysician}
                          selectedItem={selectCatheterID}
                          setSelectedItem={setSelectPhysician}
                          isInvalid={!!pcnCatheterDataError.physicianError}
                          errorMsg={pcnCatheterDataError.physicianError}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2" md="6">
                      <div className="formGroup">
                        <DropDown
                          label="Hospital"
                          items={tempPhysician}
                          selectedItem={selectHospital}
                          setSelectedItem={setSelectPhysician}
                          isInvalid={!!pcnCatheterDataError.physicianError}
                          errorMsg={pcnCatheterDataError.physicianError}
                        />
                      </div>
                    </Col>
                    <Col className="px-2 pd-1" md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="followUp">Inserted Date</label>
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
                    {/* <Col className="px-2" md="6">
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
                    </Col> */}
                  </Row>
                  <Row>
                    <Col className="px-2 " md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="location">Volume</label>
                        <Form.Control
                          className={styles.formControl}
                          id="location"
                          placeholder="Volume"
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
                    <Col className="px-2 " md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="location">Color</label>
                        <Form.Control
                          className={styles.formControl}
                          id="location"
                          placeholder="Color"
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
                  </Row>
                  <Row>
                    <Col className="px-2 " md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="location">Photo</label>
                        <Form.Control
                          className={styles.formControl}
                          id="location"
                          placeholder="Photo"
                          name="location"
                          type="file"
                          value={pcnCatheterData.location ?? ""}
                          onChange={handleInput}
                          isInvalid={!!pcnCatheterDataError.locationError}
                        />
                        <Form.Control.Feedback type="invalid">
                          {pcnCatheterDataError.locationError}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col className="px-2 " md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="location">Note</label>
                        <Form.Control
                          className={styles.formControl}
                          id="location"
                          placeholder="Note"
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
                  </Row>
                  <Row>
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
                    <Col className="px-2 pd-1" md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="followUp">FollowUp Date</label>
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
                    {/* <Col className="px-2" md="6">
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
                    </Col> */}
                  </Row>
                  <Row>
                    <Col className="px-2 pd-1" md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="followUp">FollowUp Date</label>
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

export default CatheterTransaction;
