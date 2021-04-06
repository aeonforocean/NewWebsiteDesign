import React from "react";
import "./style.css";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import headImage from "../../img/index_header.webp";
import whyoceans from "../../img/whyoceans.webp";
import k2w from "../../img/K2W.webp";
import takeaction from "../../img/takeaction.webp";
import commonsenseplastic from "../../img/commonsenseplastic.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";


function Home() {
    return (
        <>
        <Jumbotron fluid style={{ backgroundImage: `url(${headImage})`, backgroundSize: 'cover', height: '500px' }}>
            <Container>
                <h2>Kids teaching kids to lead the way in protecting the world's oceans</h2>
            </Container>
        </Jumbotron>
        <Container>
            <Row>
                <Col>
                    <h1>Our Story</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                        <p>
                            Aeon for Ocean was founded by Aeon, a 7-year-old from Minnesota, to empower his peers to 
                            protect the ocean and this beautiful planet. Aeon has been passionate about marine life 
                            since he was two years old, and he is an avid advocate for the ocean and its creatures. 
                            His love of the world’s oceans and his drive for conservation has inspired his parents and 
                            classmates alike.
                        </p>
                </Col>
            </Row>
            <Row>
                <Col>
                        <p>
                            Living in the Midwest, far from the coast, made Aeon especially curious about how people 
                            inland are connected to marine ecosystems. Our oceans are the life support of planet Earth, 
                            an interconnected system of all the Earth's waters. We are also part of this system with every 
                            breath we take and through the water we drink. At Aeon for Ocean, our mission is to educate kids 
                            on marine life while focusing on ocean conservation and helping them create awareness about the 
                            importance of oceans from within their schools and communities. As Aeon says, "no matter where 
                            we live or eat seafood, we all are in trouble when the ocean is in trouble!"
                        </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='card text-center' style={{border: "none !important", maxWidth: "400px"}}>
                        <img className="card-img" src={whyoceans} alt="Why Oceans"/>
                        <div className="card-img-overlay">
                            <h1 className="card-title pt-5">Why Oceans</h1>
                            <a href="knowyourocean.html" className="card-text justify-content-center align-content-center">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "rgb(33, 37, 41)"}} />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='card text-center' style={{border: "none !important", maxWidth: "400px"}}>
                        <img className="card-img" src={k2w} alt="Krill to Whale"/>
                        <div className="card-img-overlay">
                            <h1 className="card-title pt-5">Krill to Whale</h1>
                            <a href="knowyourocean.html" className="card-text justify-content-center align-content-center">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "rgb(33, 37, 41)"}} />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='card text-center' style={{border: "none !important", maxWidth: "400px"}}>
                        <img className="card-img" src={takeaction} alt="Take Action"/>
                        <div className="card-img-overlay">
                            <h1 className="card-title pt-5">Take Action</h1>
                            <a href="knowyourocean.html" className="card-text justify-content-center align-content-center">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "rgb(33, 37, 41)"}} />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='card text-center' style={{border: "none !important", maxWidth: "400px"}}>
                        <img className="card-img" src={commonsenseplastic} alt="Common Sense Plastic"/>
                        <div className="card-img-overlay">
                            <h1 className="card-title pt-5">Common Sense Plastic</h1>
                            <a href="knowyourocean.html" className="card-text justify-content-center align-content-center">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "rgb(33, 37, 41)"}} />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home;