import React, { useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import styles from "./CreateCathere.module.css";
import DropDown from "../../components/UI/DropDown";

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
  const [selectFollowUp, setSelectFollowUp] = useState("Select a Follow Up");

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
                        <label htmlFor="exampleInputEmail1">Date place</label>
                        <Form.Control
                          className={styles.formControl}
                          type="date"
                          name="datePlaced"
                          // value={user.emailId ?? ""}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-2" md="6">
                      <div className="formGroup">
                        <DropDown
                          label="Physician"
                          items={tempPhysician}
                          selectedItem={selectPhysician}
                          setSelectedItem={setSelectPhysician}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 " md="6">
                      <Form.Group className={styles.formGroup}>
                        <label>Size</label>
                        <Form.Control
                          className={styles.formControl}
                          placeholder="Size"
                          name="size"
                          type="text"
                          required
                          // onChange={handleFormInput}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-2" md="6">
                      <div className="formGroup">
                        <DropDown
                          label="Exchange"
                          items={exchangeData}
                          selectedItem={selectExchange}
                          setSelectedItem={setSelectExchange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 " md="6">
                      <Form.Group className={styles.formGroup}>
                        <label>Location</label>
                        <Form.Control
                          className={styles.formControl}
                          placeholder="Location"
                          name="location"
                          type="text"
                          required
                          // onChange={handleFormInput}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-2 pd-1" md="6">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="exampleInputEmail1">Follow Up</label>
                        <Form.Control
                          className={styles.formControl}
                          type="date"
                          name="followUp"
                          required
                          // value={user.emailId ?? ""}
                        ></Form.Control>
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
                    >
                      Submit
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="btn-fill pull-right"
                      type="reset"
                      variant="danger"
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
