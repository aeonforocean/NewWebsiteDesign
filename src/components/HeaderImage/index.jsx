import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import headImage from "../../img/index_header.webp";

function HeaderImage(props) {
    return(
        <>
        <Jumbotron fluid style={{ backgroundImage: `url(${headImage})`, backgroundSize: 'cover', height: '500px' }}>
            <Container>
                <h2>{props.text}</h2>
            </Container>
        </Jumbotron>
        </>
    )
}

export default HeaderImage;