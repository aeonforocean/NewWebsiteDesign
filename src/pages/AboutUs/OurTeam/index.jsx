import React from 'react';
import TeamCard from "../../../components/TeamCard";
import team from "./team-members.json";



function OurTeam(props) {
    
    return (
        <div>
            {/* {team.map(teamMember => (
          <TeamCard
            name={teamMember.name}
            image={teamMember.img}
            role={teamMember.role}
            bio={teamMember.bio}
          />
        ))} */}
         <TeamCard
            name={"Aeon Bashir"}
            image={img}
            role={"Head Krill"}
            bio={"Boss dude"}
          />
        </div>
    );
}

export default OurTeam;