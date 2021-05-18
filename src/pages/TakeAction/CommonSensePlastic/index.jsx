import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import HeaderImage from "../../../components/HeaderImage";
import RecycleImg from "../../../img/recycle.webp";
import DumpsterImg from "../../../img/plasticpollution.webp";
import PlasticProductImg from "../../../img/plasticeffect.webp";

function CommonSensePlastic() {
    return (
        <>
        <HeaderImage text="common sense plastic" />
        <Container>
            <Row>
                <Col>
                    <img src={RecycleImg} alt="recycle bin" style={{maxWidth: "200px"}} />
                    <p>
                        Everywhere we look, we can see the usage of plastic in one way or another. This is a huge 
                        problem and there is no easy solution to this problem. The fact is that the use of plastic 
                        is so deep in our day to day life with various means of items that it might not be possible 
                        to get rid of plastic all together. However, we can take action to reduce the usage of plastic 
                        in our daily life. We can make a whale of a difference on the plastic usage by using our best 
                        judgement and common sense. Solving the problem of plastic pollution may not as easy as just by 
                        recycling or cleaning up empty bottles, the truth is that the plastic causing the pollution 
                        can range in size from big to microscopic.
                    </p>
                </Col>

                <Col>
                    <img src={DumpsterImg} alt="Garbage  dumpster" style={{maxWidth: "200px"}} />
                    <p>
                        Simply, plastic pollution is when plastic has gathered in an area and has begun to negatively impact 
                        the natural environment and create problems for plants, wildlife and even human population. Often this 
                        includes killing plant life and posing dangers to local animals. Plastic is an incredibly useful material, 
                        but it is also made from toxic compounds known to cause illness, and because it is meant for durability, it 
                        is not biodegradable. Burning of plastic in the open air, leads to environmental pollution due to the release 
                        of poisonous chemicals. The polluted air when inhaled by humans and animals affect their health and can cause 
                        respiratory problems. Recycling really doesn't cut down on plastic, as it uses the existing plastic to create 
                        new plastic products. The process of recycling plastic can also pollute the environment in many different ways.
                    </p>
                </Col>

                <Col>
                    <img src={PlasticProductImg} alt="Plastic product" style={{maxWidth: "200px"}} />
                    <p>
                        There is no easy way out of Plastic consumption. Milk cartons are lined with plastic, and many products
                        contain tiny plastic beads (micro beads). Every time one of these items gets thrown away or washed down a drain, the
                        toxic pollutants enter our environment. We tend to overuse plastic and widely available since it is
                        inexpensive. Many fishing gears are made of plastic and when submerged in the water for long period can leak toxins as
                        well as often broken up or lost and does not get picked up. Disposal of food to a compost in a "plastic" or
                        "biodegradable" bag also cause pollution because these usually break down into small pieces and eventually
                        enter the environment as pollutant. All these different sizes of plastic pollutants have an effect on world's tiniest organism like plankton and
                        eventually upsetting the entire food chain, which means as we eat fish, we are eating some forms of plastic
                        with it. The leaking plastic hazards pollute air, land and ground water that eventually gets into a vicious cycle
                        of pollutions - Air, water, vegetation, land animals, marine life: the entire life support system of the world!
                        Recycling really doesn't cut down on plastic, as it uses the existing plastic to create new plastic
                        products. The process of recycling plastic can also pollute the environment in many different ways.
                    </p>
                </Col>
            </Row>
            <Row>
                <h2>What to do?</h2>
                <ul>
                    <li>Select items that come in non-plastic recycled and recyclable packaging</li>
                    <li>Don't use a plastic straw, keep reusable utensils and straws on hand</li>
                    <li>Use reusable snack bags and sandwich wrap for school lunches</li>
                    <li>Use paper products instead of plastic or Styrofoam</li>
                    <li>Use paper or reusable shopping bags</li>
                    <li>Use bar soap and shampoo</li>
                    <li>Use reusable water bottles</li>
                </ul>
            </Row>
        </Container>
        </>
    )
}

export default CommonSensePlastic;