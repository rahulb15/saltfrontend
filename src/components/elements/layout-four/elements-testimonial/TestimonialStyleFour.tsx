import TestimonialAreaFour from "@/components/home-four/TestimonialAreaFour";
import React from "react";

const TestimonialStyleFour = () => {
  return (
    <>
      <div className="bd-testimonial-area section-space-bottom fix">
        <div className="container">
          <div
            className="row align-items-center justify-content-center wow bdFadeInUp"
            data-wow-delay=".3s"
          >
            <div className="col-lg-12">
              <div className="section-title-wrapper section-title-space text-center">
                <div className="elements-section__wrapper elements-line">
                  <div className="separator__line line-left"></div>
                  <div className="elements-title__wrapper">
                    <h2 className="section__title elements__title">
                      Testimonial Style 04
                    </h2>
                  </div>
                  <div className="separator__line line-right"></div>
                </div>
                <p className="muted-text"></p>
              </div>
            </div>
          </div>
          <TestimonialAreaFour />
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleFour;
