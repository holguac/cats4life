import React from "react";
// import Navbar from "./Components/Navbar"

const About = () => {
    return(
        <div className="About">
            {/* <Navbar/> */}
            <h2>Interesting Cat Facts</h2>
            <p>
                <ul className="catFactList">
                    <li>Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.</li>

                    <li>Cats walk like camels and giraffes: They move both of their right feet first, then move both of their left feet. No other animals walk this way.</li>

                    <li>According to The Huffington Post, cats typically sleep for 12 to 16 hours a day.</li>

                    <li>Ancient Egyptians believed that keeping a cat would protect their home and bring them good luck.</li>

                    <li>The penalty for killing a cat in Ancient Egypt, even accidentally, was often death.</li>

                    <li>Meowing is a behavior that cats developed exclusively to communicate with people.</li>

                    <li>A cat's purr vibrates at a frequency of 25 to 150 hertz, which is the same frequency at which muscles and bones repair themselves.</li>

                    <li>Each cat's nose print is unique, much like human fingerprints.</li>

                </ul>
            </p>
        </div>
    )
}

export default About;