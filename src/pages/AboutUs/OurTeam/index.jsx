import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamCard from "../../../components/TeamCard";
import team from "./team-members.js";



function OurTeam(props) {
    
    return (
        <Container>
          <h1>Our Team</h1>
          <Row>
            {team.map(team_member => <TeamCard name={team_member.name} image={team_member.img} role={team_member.role} bio={team_member.bio}/>)}
          </Row>
        </Container>
    );
}

export default OurTeam;