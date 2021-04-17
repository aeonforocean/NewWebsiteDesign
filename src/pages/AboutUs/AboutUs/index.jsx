import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

function AboutUs(props) {
  return (
    <Container>
      <h1>Our Story</h1>
      <br></br>
      <Row>
        <Col>
          <h2>Aeon's Story</h2>
          <p>
            Aeon for Ocean was founded by Aeon, a 7-year-old from Minnesota, to
            empower his peers to protect the ocean and this beautiful planet.
            Aeon has been passionate about marine life since he was two years
            old, and he is an avid advocate for the ocean and its creatures. His
            love of the world’s oceans and his drive for conservation has
            inspired his parents and classmates alike.
          </p>
          <p>
            Living in the Midwest, far from the coast, made Aeon especially
            curious about how people inland are connected to marine ecosystems.
            Our oceans are the life support of planet Earth, an interconnected
            system of all the Earth's waters. We are also part of this system
            with every breath we take and through the water we drink. At Aeon
            for Ocean, our mission is to educate kids on marine life while
            focusing on ocean conservation and helping them create awareness
            about the importance of oceans from within their schools and
            communities. As Aeon says, "no matter where we live or eat seafood,
            we all are in trouble when the ocean is in trouble!"
          </p>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Mission</h2>
          <p>
            "To educate and increase awareness about ocean conservation and
            marine life amongst kids and their greater role in spreading the
            message to drive action."
          </p>
          <p>
            Our focus is on helping people inland understand why then ocean
            matters, irrespective of where we live or eat seafood, and things
            they can do from here to help protect it. Through our Krill2Whale
            program and other education initiatives, Aeon for Ocean is teaching
            kids they can save the world’s oceans for eons!
          </p>
          <p>
            Most of us continue to focus on human comfort first, without
            realizing the drastic impact we have. Pollution is increasing,
            global temperatures are rising, and natural disasters are becoming
            more frequent and intense. Ocean water temperature and acidity are
            also rising, causing ocean fish populations to drop. Many species
            have become endangered.
          </p>
          <p>
            Ocean conservation isn't just for large organizations and
            governments - all of us can make a difference! To protect oceans and
            help them regenerate, we need to shift our thinking and our
            lifestyle. Educating children about conservation inspires them to
            take charge in protecting the planet and becoming responsible global
            citizens. Kids are also amazing educators themselves, spreading
            knowledge to both their peers and adults, just like Aeon does for
            his friends and family.
          </p>
          <p className="text-center">
            "AWARENESS BEGINS WITH KNOWLEDGE. LEARN, THINK, AND ACT TO REDUCE
            THE HUMAN IMPACT ON THE OCEANS!"
          </p>
          <p className="text-center">
            {" "}
            "LET'S BE OPTIMISTIC, EDUCATE OURSELVES, CELEBRATE WHAT WE HAVE AND
            CREATE AWARENESS TO KEEP IT THE SAME AS WELL AS TRY RECOVERING WHAT
            IS LOST!"
          </p>
          <p className="text-center">
            {" "}
            "NO MATTER WHERE WE LIVE OR EAT SEAFOOD, WE ALL ARE IN TROUBLE WHEN
            THE OCEAN IS IN TROUBLE!"
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
