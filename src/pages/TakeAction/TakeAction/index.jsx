import React from "react";
import "./style.css";
import { Container, Row } from "react-bootstrap";
import HeaderImage from "../../../components/HeaderImage";
import {  } from "@fortawesome/free-regular-svg-icons";

function TakeAction() {
    return(
        <>
        <HeaderImage text="The ocean takes care of us, it's time to return the favor!" />

        <Container>
            <h2>
                How can we help protect the World Ocean?
            </h2>
            <p>
                Marine habitats and ecosystems are under siege from pollution, climate change, overfishing, and other threats. 
                Everything is connected to the World Ocean - to create a better future for the inhabitants of our planet, we need 
                wise stewardship of Earth's life support system. Each of us can play a role in restoring ocean resilience.

                Here are some ways you can get started and take action in your daily life!
            </p>
    
            <h2>
                Connect the Water Cycle Dots 
                <i className="fas fa-tint" />
            </h2>
            <p>
                The most important step in making a difference is to learn about the ocean and how your habits have an impact. 
                Even if we don't live near the coast, anything that goes down the drain and sewer system will end up in our 
                waterways and oceans. The trash we "throw away" also doesn't just disappear. Rainwater flowing toward our 
                neighborhood storm drain can carry loose trash into rivers and streams - and then on to the ocean.
                <ul>
                    <li>Dispose of trash properly; never throw your garbage on the ground.</li>
                    <li>Take harmful household chemicals like paint or old cleaning products to your 
                    town's waste facility instead of putting it down the drain.</li>
                </ul>
            </p>
            
            <h2>
                Toss Your Plastic Habit 
                <i className="fas fa-shopping-basket" />
            </h2>
            <p>
                Plastic is a major hazard for marine animals. Any plastic product or fragment that ends up in the ocean contributes 
                to the degradation of wildlife habitats, harming marine animals. Floating fragments of plastic products or bags 
                resemble food to many sea birds, turtles, and marine mammals. You can help prevent harm from plastics by curbing 
                your family's throwaway habits.
                <ul>
                    <li>Bring reusable bags when shopping, carry a reusable water bottle, and reduce 
                    your use of disposable storage products like plastic baggies and Tupperware.</li>
                    <li>When you must use plastic items, reuse or recycle them whenever possible.</li>
                </ul>
            </p>
            
            <h2>
                Savor Seafood Sustainably 
                <i className="fas fa-fish" />
            </h2>
            <p>
                Global fisheries are on the verge of collapse and fish populations are rapidly being depleted due to many reasons 
                but mainly unsustainable fishing practices due to ever increasing demand. You can reduce the demand for 
                overexploited species by choosing seafood that is both healthy and sustainable.
                <ul>
                    <li>Ask your seafood restaurant or fish market if they buy from sustainable fisheries.</li>
                    <li>Use a <span><a target="_blank" rel="noreferrer" href="https://www.seafoodwatch.org/seafood-recommendations/consumer-guides">Seafood Guide</a></span> when ordering or purchasing to help make sustainable choices.</li>
                    <li>In the grocery store, look for <span><a target="_blank" rel="noreferrer" href="https://www.seafoodwatch.org/seafood-recommendations/eco-certification">Eco-Certification Program</a></span> labels.</li>
                </ul>
            </p>
            
            <h2>
                Phase Out Fossil Fuels 
                <i className="fas fa-gas-pump"/>
            </h2>
            <p>
                Humans add carbon dioxide gas to the air by burning fossil fuels to power our homes, businesses, and cars. This 
                blanket of carbon dioxide acts like a greenhouse over the planet, trapping more of the sun's heat. More heat means 
                a warmer ocean, which is taking its toll on marine life and making oceans more acidic.
                You can help slow global warming and ocean acidification by reducing your carbon footprint, or the amount of fossil 
                fuels you use in daily life. Little adjustments in the way we live can add up to make a big difference.
                <ul>
                    <li>Ride a bike, walk, carpool, or use public transportation.</li>
                    <li>Turn off and unplug electronic items when not in use.</li>
                    <li>Bundle up in winter or use a fan in summer to avoid oversetting your thermostat.</li>
                    <li>Find out about green energy programs in your city or state, and do what you can to support them.</li>
                </ul>
            </p>

            <h2>Relax Responsibly at the Beach</h2>
            <p>
                Beaches can be found by oceans, lakes, or any waterfront. A trip to the beach for relaxing or for diving, surfing, 
                snorkeling, and fishing is a great way to both enjoy and explore nature. But make sure not to let your day at the 
                beach contribute to the destruction of the World Ocean!
                Always clean up after yourself, and appreciate the waterfronts without interfering with animal habitats.
                <ul>
                    <li>Be careful not to trample grasses and plants growing on the sand, and don't climb on sand dunes.</li>
                    <li>Do not remove rocks and coral.</li>
                    <li>Look out for fragile critters and their homes in shallow tide pools by the ocean, or in any puddles by lakes and rivers that are exposed when the water is low.</li>
                    <li>Pick up garbage and litter near beaches, volunteer for local beach clean-ups, and encourage others to respect the marine environment.</li>
                </ul>
            </p>

            <h2>
                Join the Krill2Whale Team 
                <span><img src="static/img/smarty_small.webp" alt="" /></span>
            </h2>
            <p>
                <span><a href="takeaction/ambassador.html">Become a Krill!</a></span> 
                Join Aeon in spreading knowledge about marine creatures and help save the oceans and our planet. 
                Kids worldwide are engaging in many ways to activate their communities and combat ocean pollution. Let's team up 
                and learn together to protect and restore marine ecosystems and the creatures who depend on them.
            </p>
        </Container>
        </>
    )
}

export default TakeAction;