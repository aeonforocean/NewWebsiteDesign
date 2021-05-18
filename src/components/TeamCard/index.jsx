import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function TeamCard(props) {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h2>{props.name}</h2>
                        <h3>{props.role}</h3>
                        <Card.Img className="team-member-photo" variant="top" src={props.image} />
                        <p className="team-member-bio">{props.bio}</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default TeamCard;