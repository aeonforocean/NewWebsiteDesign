import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamCard from "../../../components/TeamCard";
import team from "./team-members.js";



function OurTeam(props) {
    
    return (
        <Container>
          <h1>Our Team</h1>
          <Row>
            <TeamCard
                name={team[0].name}
                image={team[0].img}
                role={team[0].role}
                bio={team[0].bio}
              />
          </Row>
        </Container>
    );
}

export default OurTeam;