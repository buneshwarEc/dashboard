import React, { useRef, useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import styles from "./MedicalDiary.module.css";
import DropDown from "../../components/UI/DropDown";
import { getBase64 } from "utils/GetBase64";

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
  const [medicalDiaryData, setMedicalDiaryData] = useState({
    date: "yyyy-MM-dd",
    volume: "",
    woundSize: "",
    image: "",
    uploadedImage: "",
  });
  const [medicalDiaryDataError, setMedicalDiaryDataError] = useState({
    dateError: "",
    drainError: "",
    colorError: "",
    volumeError: "",
    woundSizeError: "",
    imageError: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMedicalDiaryData({ ...medicalDiaryData, [name]: value });
    setMedicalDiaryDataError({
      ...medicalDiaryDataError,
      [name + "Error"]: "",
    });
  };

  const onImageChangeHandler = async (e) => {
    const file = e.target.files[0];
    let baseImage = await getBase64(file);
    setMedicalDiaryData({
      ...medicalDiaryData,
      image: baseImage,
      uploadedImage: URL.createObjectURL(e.target.files[0]),
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const { date, volume, woundSize } = medicalDiaryData;

    if (date === "yyyy-MM-dd") {
      newErrors.dateError = "Date is required";
    }
    if (selectDrain === "Select a Drain") {
      newErrors.drainError = "Drain is required";
    }
    if (selectColor === "Select a Color") {
      newErrors.colorError = "Color is required";
    }
    if (volume === "") {
      newErrors.volumeError = "Volume is required";
    }
    if (woundSize === "") {
      newErrors.woundSizeError = "Wound size is required";
    }
    if (medicalDiaryData.image === "") {
      newErrors.imageError = "Image is required";
    }
    return newErrors;
  };

  const onImageUpload = (e) => {};

  const imageInputRef = useRef(null);

  const onAddImage = () => {
    imageInputRef.current.click();
  };

  const onchangeImage = (e) => {
    console.log(e.target.files[0]);
  };

  const onSubmitHandler = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setMedicalDiaryDataError(newErrors);
      return;
    }
    console.log("Submit");
    console.log(medicalDiaryData);
    console.log(medicalDiaryDataError);
    console.log(selectDrain);
    console.log(selectColor);
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
                        name="date"
                        placeholder="Date"
                        value={medicalDiaryData.date ?? ""}
                        onChange={handleInput}
                        isInvalid={!!medicalDiaryDataError.dateError}
                        className={styles.formControl}
                      />
                      <Form.Control.Feedback type="invalid">
                        {medicalDiaryDataError.dateError}
                      </Form.Control.Feedback>
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
                      isInvalid={!!medicalDiaryDataError.drainError}
                      errorMsg={medicalDiaryDataError.drainError}
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
                      isInvalid={!!medicalDiaryDataError.colorError}
                      errorMsg={medicalDiaryDataError.colorError}
                      setErrorMessage={setMedicalDiaryDataError}
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
                        name="volume"
                        placeholder="Volume"
                        value={medicalDiaryData.volume ?? ""}
                        onChange={handleInput}
                        isInvalid={!!medicalDiaryDataError.volumeError}
                        className={styles.formControl}
                      />
                      <Form.Control.Feedback type="invalid">
                        {medicalDiaryDataError.volumeError}
                      </Form.Control.Feedback>
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
                        name="woundSize"
                        placeholder="Wound Size"
                        value={medicalDiaryData.woundSize ?? ""}
                        onChange={handleInput}
                        isInvalid={!!medicalDiaryDataError.woundSizeError}
                        className={styles.formControl}
                      />
                      <Form.Control.Feedback type="invalid">
                        {medicalDiaryDataError.woundSizeError}
                      </Form.Control.Feedback>
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
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default MedicalDiary;
