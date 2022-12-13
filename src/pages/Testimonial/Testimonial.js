import React, { useEffect } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Testimonial.module.css";
import { getTestimonialHistoryDataAction } from "../../store/Testimonial";

// const testimonialHistoryData = [
//   {
//     id: 1,
//     Testimonials:
//       "dfasdfjkasdhfjkjaskdfjaksjfkasjfksjdfklsajdfklasjfklsajjfkasdjfkasjfkaskdfjasjdfkasld;fklsadkjfksaldjfaskldfjsakdfjskdjfrtertrtwertwertwertwertewtewtertdfgadsfgasdfasdfasdfasdfasdfasdfasdfsdfasdfsadfsdfsdfsdfsd",
//     Note: "Note 1",
//   },
//   {
//     id: 2,
//     Testimonials: "Testimonial 2",
//     Note: "Note 2",
//   },
//   {
//     id: 3,
//     Testimonials: "Testimonial 3",
//     Note: "Note 3",
//   },
// ];

const Testimonial = () => {
  const token = useSelector((state) => state?.Auth?.token);
  const testimonialHistoryData = useSelector(
    (state) => state?.Testimonial?.TestimonialHistoryData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getTestimonialHistoryDataAction(token));
  }, [token]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className={styles.cardContainer}>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className={styles.cardTitle}>History</Card.Title>
                <Link to="/admin/create-testimonial" className={styles.link}>
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
                        return (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td className="text-break">{item.Testimonials}</td>
                            <td className="text-break">{item.Note}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div className="d-flex flex-column justify-content-center align-items-center  h-100 text-center text-muted mt-5  p-5 ">
                    <p className={styles.noDataFound}>
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
