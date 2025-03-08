import React from "react";
import { Container } from "reactstrap";
import AboutDetails from "./about-details";
import Testimonials from "./testimonial";
import BookingOff from "./booking-off";
const About = () => {
  return (
    <>
      <div className="about-us">
        <Container>
          <div className="text-content header-div blog-header py-4">
            <div className="left-side">
              <div className="div">
                <h2>ABOUT US </h2>
                <p className="text-gray">We are your Travel Guide</p>
              </div>
              <img src="/index/bulb-heading.png" alt="" className="bulb" />

              <div className="bottom-div">
                <img src="/index/straightline.png" alt="" className="bottom-line" />

              </div>

            </div>
          </div>
        </Container>

        <AboutDetails/>
        <BookingOff/>
        <Testimonials/>
      </div>
    </>
  );
};

export default About;

