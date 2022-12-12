import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { CardLink } from "reactstrap";

import styles from "./CreateTestimonial.module.css";

const CreateTestimonial = () => {
  const [testimonialData, setTestimonialData] = useState({
    testimonial: "",
    note: "",
  });

  const [testimonialError, setTestimonialError] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTestimonialData({ ...testimonialData, [name]: value });
    setTestimonialError({ ...testimonialError, [name + "Error"]: "" });
  };

  const inputValidation = () => {
    let newErrors = "";
    if (testimonialData.testimonial === "") {
      newErrors = "This field is required";
    }
    return newErrors;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newErrors = inputValidation();
    if (newErrors) {
      setTestimonialError(newErrors);
      return;
    }
    console.log(testimonialData);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className={styles.cardContainer}>
              <Card.Header>
                <Link
                  to="/admin/testimonial"
                  style={{
                    color: "#171E88",
                  }}
                >
                  <i className="fas fa-arrow-left"></i> Back
                </Link>
              </Card.Header>
              <Card.Body>
                <Form
                  className={styles.formContainer}
                  onSubmit={onSubmitHandler}
                >
                  <Row>
                    <Col md="12">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="testimonial">Testimonial</label>
                        <Form.Control
                          className={styles.formControl}
                          id="testimonial"
                          as="textarea"
                          name="testimonial"
                          value={testimonialData.testimonial}
                          onChange={handleInput}
                          isInvalid={testimonialError}
                          rows={4}
                        />
                        <Form.Control.Feedback type="invalid">
                          {testimonialError}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="note">Note</label>
                        <Form.Control
                          id="note"
                          className={styles.formControl}
                          as="textarea"
                          name="note"
                          value={testimonialData.note}
                          onChange={handleInput}
                          rows={2}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="mt-3 mb-2 d-flex justify-content-center">
                    <Button
                      className="btn-fill pull"
                      type="submit"
                      variant="success"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateTestimonial;
