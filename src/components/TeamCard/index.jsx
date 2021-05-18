import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import photos from "../../img/team";


function TeamCard(props) {
    console.log(photos);
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Title>{props.role}</Card.Title>
                        <Card.Text>{props.bio}</Card.Text>
                    </Card.Body>
                    <img src={props.image} alt=''></img>
                </Card>
            </Col>
        </Row>
    );
}

export default TeamCard;