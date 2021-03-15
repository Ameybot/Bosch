import Upload from "./Upload";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
const initialValues = {
  prob1: "",
  prob2: "",
  prob3: "",
  prob4: "",
  prob5: "",
  prob6: "",
};

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  text: {
    width: 50,
    height: 30,
  },
});
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 37,
    label: "37",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function User() {
  const [values, setValues] = useState(initialValues);

  const handleProb = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log("values", values);
  const [contrast, setContrast] = useState([10, 20]);
  const [brightness, setBrightness] = useState([20, 40]);
  const [skewness, setSkewness] = useState([10, 20]);
  const [noise, setNoise] = useState([20, 40]);
  const [weather, setWeather] = useState([10, 20]);
  const [sharpness, setSharpness] = useState([20, 40]);

  const handlebrightness = (event, newValue) => {
    setBrightness(newValue);
  };
  const handleContrast = (event, newValue) => {
    setContrast(newValue);
  };
  const handleSkewness = (event, newValue) => {
    setSkewness(newValue);
  };
  const handleNoise = (event, newValue) => {
    setNoise(newValue);
  };
  const handleWeather = (event, newValue) => {
    setWeather(newValue);
  };
  const handleSharpness = (event, newValue) => {
    setSharpness(newValue);
  };

  const data = {
    brightness: brightness,
    contrast: contrast,
    skewness: skewness,
    noise: noise,
    weather: weather,
    sharpness: sharpness,
  };
  console.log("data", data);
  const handleAugment = () => {
    axios.post("http://localhost:5000/augment", data).then(
      (response) => {
        var result = response.data;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const valueRef = useRef(""); //creating a refernce for TextField Component

  const showText = () => {
    return console.log("text", valueRef.current.value); //on clicking button accesing current value of TextField and outputing it to console
  };
  const classes = useStyles();

  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <Card className="card-user" style={{ height: "130px" }}>
              <CardBody>
                <p className="description text-center">
                  <Upload></Upload>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-user" style={{ height: "130px" }}>
              <CardBody>
                <p className="description text-center">
                  <div style={{ color: "black" }}>Add from Sample Dataset</div>
                  <Button style={{ backgroundColor: "#34B5B8" }}>Add</Button>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Col md="6">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Add Augmentation</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Col>
                  <Row className="pr-1" md="12">
                    <FormGroup>
                      <label>Brightness</label>
                      <div className={classes.root}>
                        <Row>
                          <Col md="8">
                            <Slider
                              value={brightness}
                              defaultValue={[20, 37]}
                              onChange={handlebrightness}
                              valueLabelDisplay="auto"
                              marks={marks}
                              aria-labelledby="range-slider"
                              getAriaValueText={valuetext}
                              name="brightness"
                            />
                          </Col>
                          <Col md="4" className={classes.text}>
                            <TextField
                              value={values.prob1}
                              id="outlined-basic"
                              size="small"
                              label="Probabilty"
                              variant="outlined"
                              onChange={handleProb}
                              name="prob1"
                            />
                          </Col>
                        </Row>
                      </div>
                    </FormGroup>
                  </Row>
                  <Row className="px-1" md="12">
                    <FormGroup>
                      <label>Contrast</label>
                      <div className={classes.root}>
                        <Row>
                          <Col md="8">
                            <Slider
                              value={contrast}
                              defaultValue={[20, 37]}
                              onChange={handleContrast}
                              valueLabelDisplay="auto"
                              marks={marks}
                              aria-labelledby="range-slider"
                              getAriaValueText={valuetext}
                              name="contrast"
                            />
                          </Col>
                          <Col md="4" className={classes.text}>
                            <TextField
                              value={values.prob2}
                              id="outlined-basic"
                              size="small"
                              label="Probabilty"
                              variant="outlined"
                              onChange={handleProb}
                              name="prob2"
                            />
                          </Col>
                        </Row>
                      </div>
                    </FormGroup>
                  </Row>
                  <Row className="pl-1" md="12">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Sharpness</label>
                      <div className={classes.root}>
                        <Row>
                          <Col md="8">
                            <Slider
                              value={sharpness}
                              defaultValue={[20, 37]}
                              onChange={handleSharpness}
                              valueLabelDisplay="auto"
                              marks={marks}
                              aria-labelledby="range-slider"
                              getAriaValueText={valuetext}
                            />
                          </Col>
                          <Col md="4" className={classes.text}>
                            <TextField
                              value={values.prob3}
                              id="outlined-basic"
                              size="small"
                              label="Probabilty"
                              variant="outlined"
                              onChange={handleProb}
                              name="prob3"
                            />
                          </Col>
                        </Row>
                      </div>
                    </FormGroup>
                  </Row>

                  <Row className="pr-1" md="12">
                    <FormGroup>
                      <label>Skewness</label>
                      <div className={classes.root}>
                        <Row>
                          <Col md="8">
                            <Slider
                              value={skewness}
                              defaultValue={[20, 37]}
                              onChange={handleSkewness}
                              valueLabelDisplay="auto"
                              marks={marks}
                              aria-labelledby="range-slider"
                              getAriaValueText={valuetext}
                            />
                          </Col>
                          <Col md="4" className={classes.text}>
                            <TextField
                              value={values.prob4}
                              id="outlined-basic"
                              size="small"
                              label="Probabilty"
                              variant="outlined"
                              onChange={handleProb}
                              name="prob4"
                            />
                          </Col>
                        </Row>
                      </div>
                    </FormGroup>
                  </Row>
                  <Row className="pl-1" md="12">
                    <FormGroup>
                      <label>Add Noise to the image</label>
                      <div className={classes.root}>
                        <Row>
                          <Col md="8">
                            <Slider
                              value={noise}
                              defaultValue={[20, 37]}
                              onChange={handleNoise}
                              valueLabelDisplay="auto"
                              marks={marks}
                              aria-labelledby="range-slider"
                              getAriaValueText={valuetext}
                            />
                          </Col>
                          <Col md="4" className={classes.text}>
                            <TextField
                              value={values.prob5}
                              id="outlined-basic"
                              size="small"
                              label="Probabilty"
                              variant="outlined"
                              onChange={handleProb}
                              name="prob5"
                            />
                          </Col>
                        </Row>
                      </div>
                    </FormGroup>
                  </Row>

                  <Row md="12">
                    <FormGroup>
                      <label>Weather Filters</label>
                      <div className={classes.root}>
                        <Row>
                          <Col md="8">
                            <Slider
                              value={weather}
                              defaultValue={[20, 37]}
                              onChange={handleWeather}
                              valueLabelDisplay="auto"
                              marks={marks}
                              aria-labelledby="range-slider"
                              getAriaValueText={valuetext}
                            />
                          </Col>
                          <Col md="4" className={classes.text}>
                            <TextField
                              value={values.prob6}
                              id="outlined-basic"
                              size="small"
                              label="Probabilty"
                              variant="outlined"
                              onChange={handleProb}
                              name="prob6"
                            />
                          </Col>
                        </Row>
                      </div>
                    </FormGroup>
                  </Row>
                </Col>

                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button
                      className="btn-round"
                      color="primary"
                      type="submit"
                      onClick={handleAugment}
                    >
                      Add Augmentation
                    </Button>
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
}
