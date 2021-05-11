import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        <a class="footer-icon" href="https://www.facebook.com/aeonforocean/" target="_blank" rel="noopener, noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" color="black" />
                        </a>
                        <a class="footer-icon" href="https://www.instagram.com/explore/tags/aeonforocean/?hl=en/" target="_blank" rel="noopener, noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
                        </a>
                        <a class="footer-icon" href="https://www.linkedin.com/company/aeon4ocean/" target="_blank" rel="noopener, noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
                        </a>
                        <a class="footer-icon" href="https://www.youtube.com/channel/UC0hqnmu0hBXGvnhP32v5_1A" target="_blank" rel="noopener, noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" color="black" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul class="px-0 footer-list list-group list-group-horizontal">
                            <li class="footer-links"><a rel="noopener, noreferrer" target="_blank" href="https://www.volunteermatch.org/search/org1107201.jsp">Volunteer with us</a></li>
                            <li class="footer-links"><a href="/contact">Request a speaker</a></li>
                            <li class="footer-links"><a href="/privacy">Privacy Policy</a></li>
                            <li class="footer-links"><a href="/contact">Contact us</a></li>
                            <li class="footer-links"><a href="/sitemap">Sitemap</a></li>
                            <li class="footer-links"><a href="about/partners.html">Partners</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <h4 class="text-center">© Aeon For Ocean 2021</h4>
        </footer>
    )
}

export default Footer;