import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import classes from "./BecomeK2WAmbassador.module.css";
import { states } from "../../../contants";
import { useForm } from "react-hook-form";

function BecomeK2WAmbassador() {
  const {register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      //TODO: maybe send information through email to a founder
      console.log(data);
  }

  return (
    <div className={classes.pageContainer}>
      <div className={classes.formContainer}>
        <p className={classes.formTitle}>Become a Krill 2 Whale Ambassador!</p>
        <Form className={classes.formContent} onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className={classes.formInput}
                required
                type="text"
                name="firstName"
                placeholder="First Name"
                ref={register}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className={classes.formInput}
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
                ref={register}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                className={classes.formInput}
                required
                type="text"
                placeholder="Please enter your Street Address"
                name="streetAddress"
                ref = {register}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>City</Form.Label>
              <Form.Control
                className={classes.formInput}
                required
                type="text"
                placeholder="Please enter your City"
                name = "city"
                ref={register}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>State/Province</Form.Label>
              <Form.Control
                as="select"
                className={classes.formInput}
                required
                placeholder="Please select your State"
                name = "state"
                ref={register}
              >
                {states.map((state) => (
                  <option value={state.replace(/\s/gi, "").toLowerCase()}>
                    {state}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={classes.formInput}
                required
                type="text"
                placeholder="Email Address"
                name = "emailAddress"
                ref = {register}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                className={classes.formInput}
                required
                type="text"
                placeholder="Phone Number"
                name = "phoneNumber"
                ref = {register}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              required
              className={classes.formInput}
              style={{ height: "150px" }}
              placeholder="Please enter your message"
              name = "message"
              ref={register}
            />
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Check required type="checkbox" name="ageOver18" />
            </Form.Group>
            <Form.Label>
              By checking this box I am providng consent that I am over 18 years
              or older.
            </Form.Label>
          </Form.Row>

          <Button type="submit" size="lg">
            Submit Form
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BecomeK2WAmbassador;