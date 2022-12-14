import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MedicalDiary.module.css";
import DropDown from "../../components/UI/DropDown";
import { getHospitalDataAction } from "store/User";
import { data } from "jquery";
import {
  addMedicalDiaryDataAction,
  getMedicalDiaryDataAction,
} from "../../store/MedicalDiary";

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
  const token = useSelector((state) => state?.Auth?.token);
  const HospitalData = useSelector((state) => state?.User?.HospitalData);
  const MedicalDiaryData = useSelector(
    (state) => state?.MedicalDiary?.MedicalDiaryData
  );

  console.log("Medical Diary Data : ", MedicalDiaryData);

  const [selectHospital, setSelectHospital] = useState("Select a Hospital");
  const [selectedHospitalId, setSelectedHospitalId] = useState("");
  const [medicalDiaryData, setMedicalDiaryData] = useState({
    otherHospitalName: "",
    drain: "",
  });
  const [medicalDiaryDataError, setMedicalDiaryDataError] = useState({
    hospitalError: "",
    drainError: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHospitalDataAction(token));
    dispatch(getMedicalDiaryDataAction(token));
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMedicalDiaryData({ ...medicalDiaryData, [name]: value });
    setMedicalDiaryDataError({
      ...medicalDiaryDataError,
      [name + "Error"]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const { otherHospitalName, drain } = medicalDiaryData;
    if (selectHospital === "Select a Hospital") {
      newErrors.drainError = "Hospital is required";
    }
    if (drain === "") {
      newErrors.drainError = "Drain is required";
    }
    return newErrors;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setMedicalDiaryDataError(newErrors);
      return;
    }
    data = {
      Hospital: selectedHospitalId,
      Other_Hospital_Name: medicalDiaryData.otherHospitalName,
      Drain: medicalDiaryData.drain,
    };
    console.log("submit", data);
    dispatch(addMedicalDiaryDataAction(token, data));
  };

  return (
    <Container>
      <Row className=" d-flex justify-content-center align-items-center py-2">
        <Col md="8">
          <Card className={styles.cardContainer}>
            <Card.Body>
              <div>
                <Form className="p-1" onSubmit={onSubmitHandler}>
                  <DropDown
                    label="Hospital"
                    items={HospitalData}
                    setSelectedItem={setSelectHospital}
                    selectedItem={selectHospital}
                    setSelectedItemID={setSelectedHospitalId}
                    isInvalid={!!medicalDiaryDataError.drainError}
                    errorMsg={medicalDiaryDataError.drainError}
                  />
                  <Form.Group
                    controlId="formBasicVolume"
                    className={styles.formGroup}
                  >
                    <label>Other Hospital Name</label>
                    <Form.Control
                      type="text"
                      name="otherHospitalName"
                      placeholder="Other Hospital Name"
                      value={medicalDiaryData.otherHospitalName ?? ""}
                      onChange={handleInput}
                      isInvalid={!!medicalDiaryDataError.volumeError}
                      className={styles.formControl}
                    />
                    <Form.Control.Feedback type="invalid">
                      {medicalDiaryDataError.volumeError}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicWoundSize"
                    className={styles.formGroup}
                  >
                    <Form.Label>Drain</Form.Label>
                    <Form.Control
                      type="text"
                      name="drain"
                      placeholder="Drain"
                      value={medicalDiaryData.drain ?? ""}
                      onChange={handleInput}
                      isInvalid={!!medicalDiaryDataError.drainError}
                      className={styles.formControl}
                    />
                    <Form.Control.Feedback type="invalid">
                      {medicalDiaryDataError.drainError}
                    </Form.Control.Feedback>
                  </Form.Group>
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
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MedicalDiary;
