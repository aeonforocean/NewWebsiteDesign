import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import ContactPic from "../../../img/contact.jpg";
import SpeakerPic from "../../../img/speaker_desk.jpg";
import VolunteerPic from "../../../img/volunteer.jpg";
import classes from "./ContactUs.module.css";

function ContactUs(props) {

    return (
        <> 
         <Container fluid> 
            <Row>
                {/* Contact US */}
                <Col>
                    <Card border="light" className = {classes.cardComponent}>
                        <Card.Img src = {ContactPic} className = {classes.cardImage}></Card.Img>
                        <Card.ImgOverlay>
                            <Card.Title className={classes.cardTitle}><p className={classes.cardTitleWord}>Contact Us</p></Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                {/* Request Speaker */}
                <Col>
                <Card border="light" className = {classes.cardComponent} style =  {{height: "100%"}} onClick = {() => props.history.push("/contact-us/request-a-speaker")}>
                    <Card.Img src = {SpeakerPic} style = {{height:"100%", objectFit: "cover"}} className = {classes.cardImage} ></Card.Img>
                    <Card.ImgOverlay style = {{height:"100%"}}>
                        <Card.Title className={classes.cardTitle}><p className={classes.cardTitleWord}>Request A Speaker</p></Card.Title>
                    </Card.ImgOverlay>
                    
                </Card>
                    
                </Col>
                {/* Volunteer */}
                <Col>
                    <div onClick = {() => window.open("https://www.volunteermatch.org/search/org1107201.jsp")}>
                        <Card border="light" className = {classes.cardComponent}>
                            <Card.Img src = {VolunteerPic} className = {classes.cardImage}></Card.Img>
                            <Card.ImgOverlay>
                                <Card.Title className={classes.cardTitle}><p className={classes.cardTitleWord}>Request A Speaker</p></Card.Title>
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