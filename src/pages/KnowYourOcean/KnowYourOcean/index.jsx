import React from "react";
import "./style.css";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import HeaderImage from "../../../components/HeaderImage";

function KnowYourOcean() {

    return (
        <>
        <HeaderImage text="We all depend on the ocean to thrive, now and in the future." />

        <div className='container-fluid my-5' id='section1'>
            <div className='row' id=''>
                <div className='container' id='worldocean_wrapper'>
                    <h2 className="display-4">What is the World Ocean, and why is it important?</h2>
                    <p>
                        Oceans are a true source of plenty. Our World Ocean provides us with the air we breathe and regulates
                        our climate and weather patterns. This interconnected water system is important for transportation,
                        recreation, food, medicine, and more - it is a vital part of our existence.
                    </p>
                    <p>
                        Life on Earth came from the ocean and continues to rely on ocean water in many ways. Oceans cover
                        three-quarters of the planet and hold about 97% of the planet's water. Even far from the sea, there
                        is oxygen from tiny ocean plants called phytoplankton in every breath we take. These plants produce
                        more than half the world's oxygen. In addition, ocean waters absorb carbon dioxide emissions, helping
                        keep our atmosphere in balance.
                    </p>
                    <p>
                        Oceans also help regulate Earth's weather and climate systems. Ocean currents transfer heat around the
                        world, and storms and hurricanes are formed in tropical ocean waters. Storms are part of the water cycle
                        that provides fresh water to all living things. However, global warming and changes in ocean temperature
                        are leading to more destructive, unpredictable hurricanes and monsoons. Keeping the ocean healthy is key
                        to maintaining a healthy global climate.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default KnowYourOcean;