import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import classes from './RequestASpeaker.module.css';
import {states} from '../../../contants'

function RequestASpeaker()  {
    return (
        <div className = {classes.pageContainer}>
            <div className = {classes.formContainer}>
                <p className = {classes.formTitle}>Request A Speaker</p>
                <Form className = {classes.formContent}>
                    <Form.Row>
                        <Form.Group as = {Col} md = "6">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control className = {classes.formInput} required type = "text" placeholder = "First Name"/>
                        </Form.Group>
                        <Form.Group as = {Col} md = "6">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control className = {classes.formInput}  required type = "text" placeholder = "Last Name"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as = {Col} md = "12">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control  className = {classes.formInput} required type = "text" placeholder = "Please enter your Street Address"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as = {Col} md = "6">
                        <Form.Label>City</Form.Label>
                        <Form.Control className = {classes.formInput} required type = "text" placeholder = "Please enter your City"/>
                        </Form.Group>
                        <Form.Group as = {Col} md = "6">
                        <Form.Label>State/Province</Form.Label>
                        <Form.Control as = "select" className = {classes.formInput} required placeholder = "Please select your State">
                        {states.map(state=>(
                            <option value={state.replace(/\s/gi,"").toLowerCase()}>{state}</option>
                        ))}
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as = {Col} md = "6">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className = {classes.formInput}  required type = "text" placeholder = "Email Address"/>
                        </Form.Group>
                        <Form.Group as = {Col} md = "6">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control className = {classes.formInput}  required type = "text" placeholder = "Phone Number"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as = "textarea" required className = {classes.formInput} style = {{height:"150px"}} placeholder = "Please enter your message"/>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group>
                        <Form.Check 
                        required 
                        type = "checkbox"
                        feedbackTooltip
                        label="By checking this box I am providng consent that I am over 18 years or older."
                        name = "ageOver18" />
                    </Form.Group>
                    </Form.Row>
                    
                    <Button type="submit" size = "lg">Submit Form</Button>
                </Form>
            </div>
        </div>
    );
}

export default RequestASpeaker;