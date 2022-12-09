import React, { useRef, useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import styles from "./MedicalDiary.module.css";
import DropDown from "../../components/UI/DropDown";

const TempDrainData = [
  {
    id: 1,
    name: "Drain 1",
  },
  {
    id: 2,
    name: "Drain 2",
  },
  {
    id: 3,
    name: "Drain 3",
  },
];

const MedicalDiary = () => {
  const [selectDrain, setSelectDrain] = useState("Select a Drain");
  const [selectColor, setSelectColor] = useState("Select a Color");
  const [startDate, setStartDate] = useState(new Date());

  const imageInputRef = useRef(null);

  const onAddImage = () => {
    imageInputRef.current.click();
  };

  const onchangeImage = (e) => {
    console.log(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <Container>
      <Card className={styles.cardContainer}>
        <Row>
          {/* <Col md="5">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Calendar />
            </div>
          </Col> */}
          <Col md="8">
            <div className={styles.formContainer}>
              <Form className="p-1">
                <Row>
                  <Col md="12" xs={10}>
                    <Form.Group
                      controlId="formBasicDate"
                      className={styles.formGroup}
                    >
                      <label>Date</label>
                      <Form.Control
                        type="date"
                        placeholder="Date"
                        className={styles.formControl}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col xs={10} md="12">
                    <DropDown
                      label="Drain"
                      items={TempDrainData}
                      setSelectedItem={setSelectDrain}
                      selectedItem={selectDrain}
                    />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col xs={10} md="12">
                    <DropDown
                      label="Color"
                      items={TempDrainData}
                      selectedItem={selectColor}
                      setSelectedItem={setSelectColor}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xs={10}>
                    <Form.Group
                      controlId="formBasicVolume"
                      className={styles.formGroup}
                    >
                      <label>Volume</label>
                      <Form.Control
                        type="text"
                        placeholder="Volume"
                        className={styles.formControl}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="12" xs={10} className="">
                    <Form.Group
                      controlId="formBasicWoundSize"
                      className={[styles.formGroup] + " " + "ml-lg-2"}
                    >
                      <Form.Label>Wound Size</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Wound Size"
                        className={styles.formControl}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col md="4">
            <Card
              className="card-user"
              style={{
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <Card.Body className={styles.imageCardBody}>
                <input
                  ref={imageInputRef}
                  type="file"
                  id="file"
                  className="d-none"
                  accept="image/*"
                  onChange={onchangeImage}
                />
                <img
                  alt="..."
                  className="p-2 border-gray"
                  src={require("assets/img/faces/face-3.jpg")}
                />
                <Button variant="outline-primary" onClick={onAddImage}>
                  Add Image
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mt-3 mb-2 d-flex justify-content-center">
          <Button
            className="btn-fill pull"
            type="submit"
            variant="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default MedicalDiary;
