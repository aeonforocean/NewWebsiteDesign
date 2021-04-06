import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <a href="https://www.facebook.com/aeonforocean/" target="_blank" rel="noopener, noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="black" />
                    </a>
                    <a href="https://www.instagram.com/explore/tags/aeonforocean/?hl=en/" target="_blank" rel="noopener, noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
                    </a>
                    <a href="https://www.linkedin.com/company/aeon4ocean/" target="_blank" rel="noopener, noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC0hqnmu0hBXGvnhP32v5_1A" target="_blank" rel="noopener, noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="2x" color="black" />
                    </a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul class="px-0">
                        <li class="footer-links"><a href="about.html">About us</a></li>
                        <li class="footer-links"><a href="about/team.html">Our Team</a></li>
                        <li class="footer-links"><a href="k2w.html">Our Program</a></li>
                        <li class="footer-links"><a href="about/journey.html">Our Journey</a></li>
                        <li class="footer-links"><a href="about/board.html">Our Board</a></li>
                    </ul>
                </Col>
                <Col>
                    <ul class="px-0">
                        <li class="footer-links"><a href="about/partners.html">Partners</a></li>
                        <li class="footer-links"><a href="contact.html">Contact us</a></li>
                        <li class="footer-links"><a href="contact.html">Request a speaker</a></li>
                        <li class="footer-links"><a rel="noopener, noreferrer" target="_blank" href="https://www.volunteermatch.org/search/org1107201.jsp">Volunteer with us</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;