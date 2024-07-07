import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to GRILLGROW BBQ, where we bring the heart and soul of barbecue to your plate! Located in the heart of downtown, our restaurant is dedicated to serving mouthwatering, slow-cooked meats, savory sides, and homemade sauces. Our pitmasters use only the finest ingredients and traditional smoking techniques to ensure every bite is a flavorful experience. Whether you’re craving tender brisket, juicy ribs, or our famous pulled pork, GRILLGROW BBQ promises a warm atmosphere and a meal that feels like home. Join us for a true taste of barbecue perfection!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;