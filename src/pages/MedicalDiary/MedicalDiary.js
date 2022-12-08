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
          <Col md="8">
            <div className={styles.formContainer}>
              <Form>
                <Row className="my-2">
                  <Col xs={10} md={6}>
                    <DropDown
                      label="Drain"
                      items={TempDrainData}
                      setSelectedItem={setSelectDrain}
                      selectedItem={selectDrain}
                    />
                  </Col>
                  <Col xs={10} md={6}>
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
                    <Form.Group controlId="formBasicVolume">
                      <Form.Label>Volume</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Volume"
                        style={{
                          borderRadius: "12px",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="12" xs={10} className="">
                    <Form.Group
                      controlId="formBasicWoundSize"
                      className="ml-lg-2"
                    >
                      <Form.Label>Wound Size</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Wound Size"
                        style={{
                          borderRadius: "12px",
                        }}
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
                  className="avatar border-gray"
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
