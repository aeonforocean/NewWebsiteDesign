import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import ContactPic from "../../../img/contact.jpg";
import SpeakerPic from "../../../img/speaker_desk.jpg";
import VolunteerPic from "../../../img/volunteer.jpg";
import classes from "./ContactUs.module.css";

function ContactUs() {

    return (
        <> 
         <Container fluid> 
            <Row>
                {/* Contact US */}
                <Col>
                    <Card border="light" className = {classes.cardComponent}>
                        <Card.Img src = {ContactPic} className = {classes.cardImage}></Card.Img>
                        <Card.ImgOverlay>
                            <Card.Title className={classes.cardTitle}>Contact Us</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                {/* Request Speaker */}
                <Col>
                    <Card border="light" className = {classes.cardComponent}>
                        <Card.Img src = {SpeakerPic} className = {classes.cardImage} style={{height: "100%", objectFit: "cover"}}></Card.Img>
                        <Card.ImgOverlay>
                            <Card.Title className={classes.cardTitle}>Request a Speaker</Card.Title>
                        </Card.ImgOverlay>
                       
                    </Card>
                </Col>
                {/* Volunteer */}
                <Col>
                    <div onClick = {() => window.open("https://www.volunteermatch.org/search/org1107201.jsp")}>
                        <Card border="light" className = {classes.cardComponent}>
                            <Card.Img src = {VolunteerPic} className = {classes.cardImage}></Card.Img>
                            <Card.ImgOverlay>
                                <Card.Title  className={classes.cardTitle}>Volunteer With Us</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    
                    
                </Col>
            </Row>
         </Container>
        </>
    );
}

export default ContactUs;