import React, { useEffect } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Testimonial.module.css";
import { getTestimonialHistoryDataAction } from "store/Testimonial";

const testimonialHistoryData = [
  {
    id: 1,
    Testimonials:
      "dfasdfjkasdhfjkjaskdfjaksjfkasjfksjdfklsajdfklasjfklsajjfkasdjfkasjfkaskdfjasjdfkasld;fklsadkjfksaldjfaskldfjsakdfjskdjfrtertrtwertwertwertwertewtewtertdfgadsfgasdfasdfasdfasdfasdfasdfasdfsdfasdfsadfsdfsdfsdfsd",
    Note: "Note 1",
  },
  {
    id: 2,
    Testimonials: "Testimonial 2",
    Note: "Note 2",
  },
  {
    id: 3,
    Testimonials: "Testimonial 3",
    Note: "Note 3",
  },
];

const Testimonial = () => {
  const token = useSelector((state) => state?.Auth?.token);
  // const testimonialHistoryData = useSelector(
  //   (state) => state?.Testimonial?.TestimonialHistoryData
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestimonialHistoryDataAction(token));
  }, [token]);

  console.log("Testimonial History Data : ", testimonialHistoryData);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className={styles.cardContainer}>
              <Card.Header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Card.Title
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    color: "#171E88",
                  }}
                >
                  History
                </Card.Title>
                <Link
                  to="/admin/create-testimonial"
                  style={{
                    color: "#171E88",
                  }}
                >
                  <i className="fas fa-plus"></i> Add Testimonial
                </Link>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                {testimonialHistoryData &&
                testimonialHistoryData.length != 0 ? (
                  <Table striped hover size="sm">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Testimonials</th>
                        <th className="border-0">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testimonialHistoryData?.map((item, index) => {
                        if (item.Testimonials.length > 80) {
                          // giv line break after 80 characters and start from next line
                          item.Testimonials =
                            item.Testimonials.substring(0, 80) +
                            "\n" +
                            item.Testimonials.substring(81, 160) +
                            "\n" +
                            item.Testimonials.substring(161, 240) +
                            "\n" +
                            item.Testimonials.substring(241, 320) +
                            "\n";
                        }
                        return (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.Testimonials}</td>
                            <td>{item.Note}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      marginTop: "2rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "400",
                      }}
                    >
                      No Testimonial History Found !
                    </p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
