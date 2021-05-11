import React from "react";
import "./style.css";
import { Container, Row } from "react-bootstrap";
import HeaderImage from "../../../components/HeaderImage";

function KnowYourOcean() {

    return (
        <>
        <HeaderImage text="We all depend on the ocean to thrive, now and in the future." />

        <div className='container-fluid my-5' id='section1'>
            <Row >
                <Container id='worldocean_wrapper'>
                    <h2 >What is the World Ocean, and why is it important?</h2>
                    <br></br>
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
                </Container>
            </Row>
        </div>

        <div className="container-fluid sectionImage" id="section2Image">
            <div className="overlay py-0 py-lg-5">
                <div className="row InnerWrapper  p-5 p-md-4 mx-0 justify-content-center" id="">

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">The World Ocean</h3>
                        <p className="btn-0">Learn More</p>
                    </div>

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">Marine Habitats</h3>
                        <p className="btn-0">Learn More</p>
                    </div>

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">Endangered Species</h3>
                        <p className="btn-0">Learn More</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid my-5' id='section3'>
            <div className='row' id=''>
                <div className='container'>
                    <h2 className="display-4">Why should inland people think about the ocean and its conservation?</h2>
                    <p>
                        Our land and waterways are intricately connected through 
                        Earth's water cycle. Rain and snow are formed when water evaporates from oceans and lakes, collecting 
                        in the atmosphere. When this precipitation falls on the land, that water makes its way back to rivers, 
                        lakes, and the ocean. As it moves, water carries dirt and soil along for the ride.
                    </p>
                    <p>
                        What we do on land effects the quality of water regardless of 
                        where we live. Fertilizers, pesticides, motor oils, chemical cleaners, and poorly treated sewage are 
                        some of the pollutants included in land runoff. These contaminants stay in the water cycle, even 
                        sometimes becoming part of future rain and snow.
                    </p>
                    <p>
                        To protect our oceans and planet, more commitment is needed from all of us, not just from people who 
                        live by the coast. There is a lot of ocean conservation work being done in areas like California, 
                        Florida, and the East Coast. But there isn't much focus on the ocean in places that are far inland, 
                        like Minnesota. While many Midwesterners have visited the beach on family vacations, we aren't aware 
                        of all the ways our lives are linked to the ocean - even when we're hundreds of miles away!
                    </p>
                    <p>
                        Understanding our place in the water cycle gives us a greater appreciation for the beauty of beaches 
                        and waterfronts. It also helps us see how we can contribute to conservation efforts and play a positive 
                        role in the interlinked World Ocean system.
                    </p>
                </div>
            </div>
        </div>

        <div className="container-fluid sectionImage" id="section4Image">
            <div className="overlay py-0 py-lg-5">
                <div className="row InnerWrapper  p-5 p-md-4 mx-0 justify-content-center" id="">

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">The World Ocean</h3>
                        <p className="btn-0">Learn More</p>
                    </div>

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">Land to Ocean</h3>
                        <p className="btn-0">Learn More</p>
                    </div>

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">Endangered Species</h3>
                        <p className="btn-0">Learn More</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid my-5' id='section3'>
            <div className='row' id=''>
                <div className='container'>
                    <h2 className="display-4">Where do animals live in the ocean?</h2>
                    <p>
                        A habitat is an area where certain animals and plants live. Marine habitats are diverse, ranging from 
                        tropical waters to polar regions, from shorelines to canyons, and from hydrothermal vents to coral reefs. 
                        These areas are home to equally varied animals, from the smallest plankton to the biggest whales. The 
                        main ocean habitats include shorelines, reefs, open waters, and deep sea.
                    </p>
                    <p>
                        Shore - An abundance of life is found along the shore. Some species live on land as well as in the surf, 
                        where they must adapt to shifting water levels and wave impacts. Many of them, like mussels, have hard 
                        shells for protection.
                    </p>
                    <p>
                        Reefs - Reefs are made up of corals and other animals that secrete a mineral called calcium carbonate, 
                        building rock formations close to shore. These habitats support complex ecosystems. Each species in a 
                        reef interacts with the others; harm to one has a domino effect on other wildlife.
                    </p>
                    <p>
                        Open Ocean - Life is also found in the open expanses of the ocean. These areas are packed with species who 
                        depend on the sunlight penetrating the surface. Seaweed and kelp grow in this habitat. Larger animals 
                        like whales and dolphins feed on smaller species like krill and plankton. Some of these animals travel 
                        between the open ocean and the shore.
                    </p>
                    <p>
                        Deep Sea Trenches- Deep sea trenches are narrow canyons in the deepest ocean areas. This 
                        habitat has very high pressure from the water above, and no sunlight penetrates there. While big animals 
                        like whales and sharks can't live in the deep sea, others have adapted to the tough conditions. Many 
                        have gelatinous bodies. Some, like anglerfish, produce their own light called bioluminescence.
                    </p>
                    <p>
                        Each marine habitat is home to a beautiful array of life, and each habitat is important to the health 
                        of the World Ocean.
                    </p>
                </div>
            </div>
        </div>

        <div className="container-fluid sectionImage" id="section6Image">
            <div className="overlay py-0 py-lg-5">
                <div className="row InnerWrapper  p-5 p-md-4 mx-0 justify-content-center" id="">

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">The World Ocean</h3>
                        <p className="btn-0">Learn More</p>
                    </div>

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">Land to Ocean</h3>
                        <p className="btn-0">Learn More</p>
                    </div>

                    <div className="col-4" id="boxWrapper">
                        <h3 className="mb-3">Marine Habitats</h3>
                        <p className="btn-0">Learn More</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid my-5' id='section7'>
            <div className='row' id=''>
                <div className='container'>
                    <h2 className="display-4">What are Endangered Species?</h2>
                    <p>
                        Endangered species are animals or plants that are in danger of becoming extinct. Only small numbers of these 
                        animals are left alive, and the entire remaining population could die out if humans don't take steps to protect 
                        them and their habitats. Often, endangered species have become threatened because of pollution, climate change, 
                        hunting, or other human activities.
                    </p>
                    <p>
                        Most plants and animals play vital roles in their ecosystems, keeping their habitats in balance and adding to the 
                        beautiful variety of life on our planet. When species become extinct, this not only affects the oceans, but also 
                        has an impact on the overall health of the biosphere.
                    </p>
                    <p>
                        Fortunately, laws like the Endangered Animals Act and the Marine Mammal Protection Act help protect these creatures 
                        and can save them from extinction. Governments and nonprofit organizations are also working to raise public 
                        awareness about the need to change human behaviors. Learning about endangered animals can both inspire us to 
                        protect them and help us understand how our lifestyle affects Earth's ecosystems.
                    </p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-md-5">
                  <p class="font-weight-bold">Critically Endangered</p>
                  <ul class="text-left">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/hawksbill-turtle">Hawksbill Turtle</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/vaquita">Vaquita</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/yangtze-finless-porpoise">Yangtze Finless Porpoise</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.nationalgeographic.com/animals/mammals/h/hawaiian-monk-seal">Hawaiian monk seal</a></li>
                  </ul>
                </div>
                <div class="col-12 col-md-5">
                  <p class="font-weight-bold">Endangered</p>
                  <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/blue-whale">Blue Whale</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/bluefin-tuna">Bluefin Tuna</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/fin-whale">Fin Whale</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/galapagos-penguin">Galápagos Penguin</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/ganges-river-dolphin">Ganges River Dolphin</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/green-turtle">Green Turtle</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/hector-s-dolphin">Hector's Dolphin</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/indus-river-dolphin">Indus River Dolphin</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/north-atlantic-right-whale">North Atlantic Right Whale</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/sea-lions">Sea Lions</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/species/sei-whale">Sei Whale</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.whaleresearch.com/orca-population">Southern resident Orcas</a></li>
                  </ul >
                </div>
              </div>
        </div>
        </>
    )
}

export default KnowYourOcean;