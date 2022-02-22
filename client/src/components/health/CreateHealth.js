import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function CreateHealth(username) {
  const [backenddata, setbackenddata] = useState([]);
  const [height, setheight] = useState([]);
  const [weight, setweight] = useState([]);
  const [date, setdate] = useState([]);

  function createhealth(event) {
    //prevent reloads after clicking submit
    event.preventDefault();

    var user = {
      username: username,
      height: height,
      weight: weight,
      date: date,
    };

    axios
      .post('/api/health/add', user)
      .then((res) => {
        console.log(res);
        setbackenddata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <p>
          <b>Create a new health record.</b>
        </p>
        <Form onSubmit={createhealth}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder={username} disabled />
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="formHeight">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              placeholder="Height"
              onChange={(e) => {
                setheight(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Height in centimetres (cm) please.
            </Form.Text>
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="formHeight">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              placeholder="Weight"
              onChange={(e) => {
                setweight(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Weight in pounds (lb) please.
            </Form.Text>
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              placeholder="Date of Birth"
              onChange={(date) => {
                setdate(date);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateHealth;
