import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function TeamCard(props) {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default TeamCard;